export default class Exception {
  private type!: string;
  private message!: string | object;
  private status!: number;
  private stack: any;

  constructor(message: string | object, status?: number, description?: string) {
    this.setType("Exception");
    this.setMessage(message);
    this.setStatus(status);
    this.setStack(description);
  }

  protected setType(type: string) {
    this.type = type;
  }

  private setMessage(
    message: string | object = "an unexpected error happened!"
  ) {
    this.message = message;
  }

  public clearMessage(): void {
    this.message = {};
  }

  private setStatus(status: number = 500) {
    this.status = status;
  }

  private setStack(description: string = "an unexpected error happened!") {
    this.stack = new Error(description).stack;
  }

  public getType() {
    return this.type;
  }

  public getMessage() {
    return this.message;
  }

  public getStatus() {
    return this.status;
  }

  public getStack() {
    return this.stack;
  }
}
