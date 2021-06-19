import { Model } from "sequelize";
import dbConnect from "../../../core/dbConnect";
import { IUser, UserSchema } from "../schemas/userSchema";
const sequelize = dbConnect();

class User extends Model implements IUser {
  public id!: number;
}

User.init(UserSchema, {
  sequelize,
});

export default User;
