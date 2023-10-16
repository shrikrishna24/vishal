import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
}
