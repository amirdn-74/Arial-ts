import { Application } from "express";
import authRoute from "../app/routes/authRoute";
import home from "../app/routes/homeRoute";

export default (app: Application) => {
  app.use("/", home);
  app.use("/", authRoute);
};
