import express from "express";
//same code with const express = require("express");
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
// view engine 으로서 pug를 설정
app.set("views", process.cwd() + "/src/views");
// cwd = current working directory => wetube-2021 + /src/views 안에 home.pug

app.use(logger);
// morgan은 middelware중 하나(이미 누군가 만들어놓은 것임/만들어서 써도 됨)
// dev 말고 네가지 더 있는데 common, short.. 
// GET / 304 6.432 ms - - 이거 출력되는 양식이 조금씩 다르게 나온다


app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


////////////////////////////////////////////////////////////

const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
//port : 4000 / 그 다음에는 함수 내용 서술