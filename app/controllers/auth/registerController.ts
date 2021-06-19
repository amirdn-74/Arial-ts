import { NextFunction, Request, Response } from "express";
import User from "../../database/models/User";
import { IUser } from "../../database/schemas/userSchema";
import validator from "../../helpers/validator";
import * as yup from "yup";

export const register = (req: Request, res: Response) => {
  // res.decide("salam", "pages/account/register");
  res.send("salam");
};

export const createUser = async (req: Request, res: Response) => {
  await validator(req, validationSchema);

  res.send("ok");
};

const validationSchema = yup.object().shape({
  phone: yup
    .string()
    .required()
    .matches(/^09\d{9}$/g, "please enter a valid phone number"),
});
