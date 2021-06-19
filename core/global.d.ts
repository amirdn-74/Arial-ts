declare namespace Express {
  interface Request {
    wantsJson: boolean;
    validate: Function;
  }

  interface Response {
    /**
     * decide(data: any, view: string)
     * @data the data that you want to send to the client
     * @view the correspnding view path
     */
    decide: Function;
  }
}
