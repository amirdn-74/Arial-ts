import { Request } from "express";
import handlebars from "handlebars";
import ValidationException from "../../core/Exceptions/ValidationException";

export const globalHelpers = (req: Request) => {
  // handlebars.registerHelper("error", (error, options) => {
  //   // console.log(req.flash("validationErrors"));
  //   return `${error} from handelbars helper!`;
  // });
};

export const setValidationErrorsViewHelpers = (req: Request) => {
  handlebars.registerHelper("error", ({ hash, fn }) => {
    const errors = req.flash(ValidationException.errorsSessionName);
    const errorMessage: any = errors.find((e: any) => e.path === hash.field);
    return !errorMessage
      ? ""
      : `<span class="field-error">${errorMessage.message}</span>`;
  });
};

export const setValidationViewOldHelper = (req: Request) => {
  handlebars.registerHelper("old", ({ hash, fn }) => {
    const olds: any = Object.assign(
      {},
      req.flash(ValidationException.oldSessionName)[0]
    );
    delete olds.password;
    delete olds["confirm-password"];
    return olds[hash.field];
  });
};
