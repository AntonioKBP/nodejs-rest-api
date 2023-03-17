const { Schema, model } = require("mongoose");

const contactSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  //   favorite:{type:{true,false},}
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
