const Contact = require("../../models/contactsModel");

// const { removeContact } = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  await Contact.findByIdAndDelete(contactId);
  res.sendStatus(204);
};

module.exports = deleteContact;
