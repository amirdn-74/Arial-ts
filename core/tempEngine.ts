import hbs from "express-handlebars";
import path from "path";
import { Application } from "express";

export default (app: Application) => {
  app.engine(
    "hbs",
    hbs({
      extname: "hbs",
      defaultLayout: "master.hbs",
      layoutsDir: path.join(__dirname, "../app/views/layouts"),
    })
  );

  app.set("views", path.join(__dirname, "../app/views"));
  app.set("view engine", "hbs");
};
