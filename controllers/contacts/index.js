const getContacts = require("../contacts/getContacts");
const getById = require("../contacts/getById");
const addNewContact = require("../contacts/addNewContact");
const deleteContact = require("../contacts/deleteContact");
const modifyContact = require("../contacts/modifyContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getContacts,
  getById,
  addNewContact,
  deleteContact,
  modifyContact,
  updateStatusContact,
};
