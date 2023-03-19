const { Contact } = require("../../models/contactsModel");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  await Contact.findByIdAndDelete(contactId);
  res.sendStatus(204);
};

module.exports = deleteContact;
