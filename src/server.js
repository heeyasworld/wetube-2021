import express from "express";
//same code with const express = require("express");
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


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

app.use(express.urlencoded({ extended: true }));
// 나의 express app이 form의 value들을 이해할 수 있도록 하고
// 우리가 쓸 수 있는 자바스크립트 형식으로 변형해줌

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;