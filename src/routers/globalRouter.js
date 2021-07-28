import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

// ../ means : get out of this folder
// ./ means : from this position

const globalRouter = express.Router();


globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;