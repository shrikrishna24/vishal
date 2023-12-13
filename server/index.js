const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const cookieParser = require("cookie-parser");

const path = require("path");
require("dotenv").config();
const app = express();

const jwtSecret = process.env.JWT_SECRET || "default-secret";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.post("/signup", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const userDoc = await User.create({
      email,
      name,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected successfully");
});

const bcryptSalt = bcrypt.genSaltSync(10);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({ token }); // Send the token in the response
        }
      );
    } else {
      res.status(422).json("Invalid credentials");
    }
  } else {
    res.status(404).json("User not found");
  }
});

app.get("/profile", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    if (userData) {
      const { name } = await User.findById(userData.id);
      res.json({ name });
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json("Internal Server Error");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token").json({ success: true });
});

const port = process.env.PORT || 5173;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
