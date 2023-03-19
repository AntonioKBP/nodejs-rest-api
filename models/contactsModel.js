const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const schemaAddOrPutContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().valid(true, false).default(false),
});

const schemaChangeFavorite = Joi.object({
  favorite: Joi.boolean().valid(true, false).required(),
});

const Contact = model("Contact", contactSchema);

module.exports = { Contact, schemaAddOrPutContact, schemaChangeFavorite };
