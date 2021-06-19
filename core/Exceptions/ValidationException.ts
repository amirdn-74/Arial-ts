import Exception from "./Exception";

export type TValidationException = {
  value: object;
  errors: object;
  inner: object;
};

export default class ValidationException extends Exception {
  public static errorsSessionName = "validationErrors";
  public static oldSessionName = "validationOld";

  constructor(
    message: object,
    status: number = 422,
    description: string = "validation failed!"
  ) {
    super(message, status, description);
    this.setType("ValidationException");
  }
}
