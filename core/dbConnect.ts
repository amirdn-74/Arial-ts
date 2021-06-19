import { Sequelize } from "sequelize";
import env from "./env";

let sequelize: any = null;

// postgres  5432

export default (): any => {
  if (sequelize != null) return sequelize;

  sequelize = new Sequelize({
    host: "localhost",
    dialect: "mysql",
    database: env("DB_DATABASE"),
    username: env("DB_USERNAME"),
    password: env("DB_PASSWORD"),
    logging: false,
    port: 3306,
    // define: {
    //   charset: "utf8",
    //   collate: "utf8_persian_ci",
    // },
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log(`mysql connected...`);
    })
    .catch((error: any) => {
      console.log("mysql could not connect!", error);
      // throw error.message;
    });

  sequelize
    .sync()
    .then(() => {
      console.log("mysql synced...");
    })
    .catch((error: any) => {
      console.log("mysql could not sync!", error);
      // throw error.message;
    });

  return sequelize;
};
