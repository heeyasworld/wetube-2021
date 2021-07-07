import express from "express";
//same code with const express = require("express");

const PORT = 4000;
const app = express();
//creates an express application.

//*server listens to my requests and then respond.

const handleHome = (req, res) => {
    return res.send("<h1>I still love you</h1>");
};

const handleLogin = (req, res) => {
    return res.send({ message: "Login here" });
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
//port : 4000 / 그 다음에는 함수 내용 서술