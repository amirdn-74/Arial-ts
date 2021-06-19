import express from "express";
import setViewDefaultParams from "../../core/setViewDefaultParams";
import { createUser, register } from "../controllers/auth/registerController";
import asyncMiddleware from "../middlewares/asyncMiddleware";
const authRoute = express.Router();

authRoute.get("/register", asyncMiddleware(register));
authRoute.post("/register", setViewDefaultParams, asyncMiddleware(createUser));

export default authRoute;
