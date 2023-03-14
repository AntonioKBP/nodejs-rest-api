const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join("models", "contacts.json");

exports.checkContactsId = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const dataFromDB = await fs.readFile(contactsPath);
    const contacts = JSON.parse(dataFromDB);
    const contact = contacts.find((elem) => elem.id === contactId);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    req.contact = contact;
    next();
  } catch (error) {}
};

const Joi = require("joi");

exports.addValidation = (req, res, next) => {
  const contactsSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });

  const validationResult = contactsSchema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({
      status: validationResult.error.details,
      message: "missing required name field",
    });
  }
  next();
};
