import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import Resetpsw from "../pages/resetpsw/resetpsw";
import Forgetpsw from "../pages/forgetpsw/forgetpsw";
import Home from "../pages/home/home";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetpsw" element={<Resetpsw />} />
      <Route path="/forgetpsw" element={<Forgetpsw />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
