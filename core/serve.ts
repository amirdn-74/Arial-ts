import { Application } from "express";

export default (app: Application) => {
  const port = normalizePort(process.env.PORT || 4000);
  const server = app.listen(port, () =>
    console.log(`node is lstening on port ${port}`)
  );
  server.on("error", (err) => {
    console.error("could not serve!", err);
  });

  return server;
};

const normalizePort = (port: any) => {
  const _port = parseInt(port);

  if (!isNaN(_port)) return _port;

  throw "port is not assignable!";
};
