import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: "string", required: true, unique: true },
    username: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("Users", UserSchema);

export default User;
