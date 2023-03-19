const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { isValidId, validation } = require("../../middlewares");
const {
  schemaAddOrPutContact,
  schemaChangeFavorite,
} = require("../../models/contactsModel");

router.get("/", ctrl.getContacts);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validation(schemaAddOrPutContact), ctrl.addNewContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validation(schemaAddOrPutContact),
  ctrl.modifyContact
);

router.patch(
  "/:contactId/favorite",
  validation(schemaChangeFavorite),
  ctrl.updateStatusContact
);

module.exports = router;
