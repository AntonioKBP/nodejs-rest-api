const express = require("express");

const router = express.Router();

const {
  getContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
} = require("../../controllers/contactControllers");

const {
  checkContactsId,
  addValidation,
} = require("../../middlewares/contactMiddleWares");

router.get("/", getContacts);

router.get("/:contactId", checkContactsId, getById);

router.post("/", addValidation, addContact);

router.delete("/:contactId", checkContactsId, removeContact);

router.put("/:contactId", addValidation, updateContact);

module.exports = router;
