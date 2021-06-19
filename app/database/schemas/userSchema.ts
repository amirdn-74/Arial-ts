import { DataTypes, ModelAttributes } from "sequelize";

export interface IUser {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  rememberToken?: string;
}

export const UserSchema: ModelAttributes = {
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      is: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  },
  phone: {
    type: DataTypes.STRING(20), // 0917 125 5031
    allowNull: false,
    unique: true,
    validate: {
      is: /^09\d{9}$/g,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remember_token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

// export interface IUserCreation extends Optional<IUser, "id"> {}
