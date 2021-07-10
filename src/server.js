import express from "express";
//same code with const express = require("express");
import morgan from "morgan";

const PORT = 4000;
const app = express();

//////////////////////////////////////////////////////////// 

const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("home");
};

const login = (req, res) => {
    return res.send("login");
}

app.use(logger);
app.get("/", handleHome);
app.get("/login", login);

////////////////////////////////////////////////////////////

const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
//port : 4000 / 그 다음에는 함수 내용 서술