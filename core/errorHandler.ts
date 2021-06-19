import ValidationException from "./Exceptions/ValidationException";
import { Application, NextFunction, Request, Response } from "express";
import {
  setValidationErrorsViewHelpers,
  setValidationViewOldHelper,
} from "../app/helpers/handlebars";

export default (app: Application) => {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (req.wantsJson) jsonHandler(err, req, res);
    if (!req.wantsJson) htmlHandler(err, req, res);
  });
};

const jsonHandler = (err: any, req: Request, res: Response) => {
  res.status(err.status).send(err);
};

const htmlHandler = (err: any, req: Request, res: Response) => {
  if (err instanceof ValidationException) {
    setValidationErrorsViewHelpers(req);
    setValidationViewOldHelper(req);
    return res.redirect(req.originalUrl);
  }

  console.log(err);
  res.send(err);
};
