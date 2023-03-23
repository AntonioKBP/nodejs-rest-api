const getAll = require("./getAll");
const getById = require("../contacts/getById");
const addContact = require("./addContact");
const deleteContact = require("../contacts/deleteContact");
const updateContact = require("./updateContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAll,
  getById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
};
