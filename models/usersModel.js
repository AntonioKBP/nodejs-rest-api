const { Schema, model } = require("mongoose");
const Joi = require("joi");

// const PASSWD_REGEX =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;
const userSubscriptionEnum = require("../constants/userSubscriptionEnum");

const userSchema = Schema(
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
    avatarUrl: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSignUpSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().valid(...Object.values(userSubscriptionEnum)),
  token: Joi.string(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const joiUpdateSubSchema = Joi.object({
  subscription: Joi.string().valid(...Object.values(userSubscriptionEnum)),
});

const User = model("user", userSchema);

module.exports = { User, joiSignUpSchema, joiLoginSchema, joiUpdateSubSchema };
