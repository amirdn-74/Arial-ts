import { Application, NextFunction, Request, Response } from "express";
import ValidationException from "./Exceptions/ValidationException";

export default (app: Application) => {
  process.on("uncaughtException", (err) => {
    console.error("exceptionOutsideMiddlewarePipe: ", err);
  });
  process.on("unhandledRejection", (err: any) => {
    if (err instanceof ValidationException) return;

    console.error("rejectionOutsideMiddlewarePipe: ", err);
  });
};
