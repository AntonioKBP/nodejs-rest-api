const { Contact } = require("../../models/contactsModel");

// const { addContact } = require("../../models/contacts");

const addNewContact = async (req, res, next) => {
  const addContactEl = await Contact.create(req.body);
  if (addContactEl) {
    return res.status(201).json({ data: addContactEl });
  } else {
    res.status(400).json({ message: "missing required name field" });
  }
};

module.exports = addNewContact;
