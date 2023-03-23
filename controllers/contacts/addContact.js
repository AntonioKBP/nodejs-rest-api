const { Contact } = require("../../models/contactsModel");

const addContact = async (req, res, next) => {
  const { _id } = req.user;
  const addContactEl = await Contact.create({ ...req.body, owner: _id });
  if (addContactEl) {
    return res.status(201).json({ data: addContactEl });
  } else {
    res.status(400).json({ message: "missing required name field" });
  }
};

module.exports = addContact;
