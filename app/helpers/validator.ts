import { Request } from "express";
import ValidationException from "../../core/Exceptions/ValidationException";

export default async (req: Request, schema: any) => {
  try {
    return await schema.validate(req.body, { abortEarly: false });
  } catch (error) {
    delete error.name;
    delete error.message;
    !req.wantsJson &&
      req.flash(ValidationException.errorsSessionName, error.inner);
    !req.wantsJson &&
      req.flash(ValidationException.oldSessionName, error.value);
    throw new ValidationException(error);
  }
};
