const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");

exports.getContacts = async (req, res, next) => {
  const getAllContacts = await listContacts();
  res.status(200).json({ msg: getAllContacts, status: "success" });
};

exports.getById = async (req, res, next) => {
  const getId = await getContactById(req.params.contactId);
  if (getId) {
    return res.status(200).json({ data: getId });
  } else {
    return res.status(404).json({ message: "Not found" });
  }
};

exports.addContact = async (req, res, next) => {
  const addContactEl = addContact(req.body);
  if (addContactEl) {
    return res.status(201).json({ data: addContactEl });
  } else {
    res.status(400).json({ message: "missing required name field" });
  }
};

exports.removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const deleteById = await removeContact(contactId);
  if (deleteById) {
    return res.status(200).json({ message: "contact deleted" });
  } else {
    return res.status(404).json({ message: "Not found" });
  }
};

exports.updateContact = async (req, res, next) => {
  const renameContact = await updateContact(req.params.contactId, req.body);
  if (renameContact) {
    res.status(200).json({ msg: renameContact });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};
