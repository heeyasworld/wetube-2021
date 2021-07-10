import express from "express";
//same code with const express = require("express");

const PORT = 4000;
const app = express();

//////////////////////////////////////////////////////////// 

const handleHome = (req, res) => {
    return res.send("<h1>You can do this</h1>");
};

const handleLogin = (req, res) => {
    return res.send({ message : "Login successed" });
};

app.get("/", handleHome);
app.get("/login", handleLogin);

////////////////////////////////////////////////////////////

const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
//port : 4000 / 그 다음에는 함수 내용 서술