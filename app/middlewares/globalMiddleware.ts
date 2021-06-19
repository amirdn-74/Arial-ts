import { Request, Response, NextFunction } from "express";
import responseDecide from "../../core/responseDecide";

export default (req: Request, res: Response, next: NextFunction) => {
  req.wantsJson = req.accepts("html") === "html" ? false : true;

  res.decide = responseDecide(req, res);

  next();
};
