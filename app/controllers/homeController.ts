import * as yup from "yup";
import User from "../database/models/User";
import env from "../../core/env";
import validator from "../helpers/validator";
import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
  res.render("pages/homePage", { appName: "shopify" });
};

export const create = async (req: Request, res: Response) => {
  const user = await validator(
    req.body,
    yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
    })
  );

  res.send(user);
};
