const Joi = require("joi");

const addValidation = (req, res, next) => {
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

module.exports = addValidation;
