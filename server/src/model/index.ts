import mongoose, { Mongoose } from "mongoose";
import Role from "./role.model";
import User from "./user.model";

mongoose.Promise = global.Promise;

const ROLES = ["user", "admin", "moderator"];

const db = {
  mongoose: Mongoose,
  user: User,
  role: Role,
  roles: ROLES
};

export default db;
