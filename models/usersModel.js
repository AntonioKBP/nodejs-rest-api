const { Schema, model } = require("mongoose");
const Joi = require("joi");

const PASSWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;
const userSubscriptionEnum = require("../constants/userSubscriptionEnum");

const usersSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const schemaAddUser = Joi.object({
  password: Joi.string().regex(PASSWD_REGEX).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().valid(...Object.values(userSubscriptionEnum)),
  token: Joi.string(),
});

const User = model("User", usersSchema);

module.exports = { User, schemaAddUser };
