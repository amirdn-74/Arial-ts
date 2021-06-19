import bodyParser from "body-parser";
import dbConnect from "./core/dbConnect";
import dotenv from "dotenv";
import errorCatcher from "./core/errorCatcher";
import errorHandler from "./core/errorHandler";
import express from "express";
import routeProvider from "./core/routeProvider";
import serve from "./core/serve";
import tempEngine from "./core/tempEngine";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import globalMiddleware from "./app/middlewares/globalMiddleware";
import { globalHelpers } from "./app/helpers/handlebars";

export const app = express();

errorCatcher(app);

if (process.env.NODE_ENV?.trim() !== "production") {
  dotenv.config();
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/assets", express.static("./public"));

app.use(cookieParser());
app.use(
  session({
    secret: "session secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
    },
  })
);
app.use(flash());

app.use(globalMiddleware);
app.use((req, res, next) => {
  globalHelpers(req);

  next();
});
tempEngine(app);
routeProvider(app);
dbConnect();
export const server = serve(app);
errorHandler(app);
