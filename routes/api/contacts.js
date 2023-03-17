const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { checkContactsId, addValidation } = require("../../middlewares");

router.get("/", ctrl.getContacts);

router.get("/:contactId", checkContactsId, ctrl.getById);

router.post("/", addValidation, ctrl.addNewContact);

router.delete("/:contactId", checkContactsId, ctrl.deleteContact);

router.put("/:contactId", addValidation, ctrl.modifyContact);

module.exports = router;
