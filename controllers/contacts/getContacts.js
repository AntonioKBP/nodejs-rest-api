const { Contact } = require("../../models/contactsModel");

const getContacts = async (req, res, next) => {
  const getAllContacts = await Contact.find();
  res.status(200).json({ msg: getAllContacts, status: "success" });
};

module.exports = getContacts;
