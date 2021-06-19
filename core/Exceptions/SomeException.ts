import Exception from "./Exception";

export default class SomeException extends Exception {
  constructor(
    message: object | string,
    status: number = 400,
    description: string = "some failed!"
  ) {
    super(message, status, description);
    this.setType("SomeException");
  }
}
