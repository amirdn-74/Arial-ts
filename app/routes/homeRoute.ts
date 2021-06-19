import express from "express";
import * as homeController from "../controllers/homeController";
const route = express.Router();

route.get("/", homeController.index);
route.post("/", homeController.create);

export default route;
