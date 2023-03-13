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

exports.getContactById = async (req, res, next) => {
  const getId = await getContactById(req.params.contactId, req.body);
  if (getId) {
    return res.status(200).json({ msg: getId, status: "success" });
  } else {
    return res
      .status(404)
      .json({ msg: `No id #${req.params.contactId} was found` });
  }
};

exports.deleteContact = async (req, res, next) => {
  const deleteById = await removeContact(req.params.contacId);
  if (deleteById) {
    return res
      .status(200)
      .json({ msg: `Contact with id${req.params.contactId} deleted` });
  } else {
    res.status(404).json({ msg: `No id #${req.params.contactId} was found` });
  }
};

exports.postContact = async (req, res, next) => {
  const addContactEl = addContact(req.body);
  if (addContactEl) {
    return res.status(201).json({ message: addContactEl, status: "success" });
  } else {
    res.status(404).json({ message: "Something went wrong", status: "error" });
  }
};

exports.upgradeContact = async (req, res, next) => {
  const renameContact = await updateContact(req.params.contactId, req.body);
  res.status(200).json({ msg: renameContact });
};
