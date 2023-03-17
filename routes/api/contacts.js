const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { addValidation } = require("../../middlewares");

router.get("/", ctrl.getContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", addValidation, ctrl.addNewContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", addValidation, ctrl.modifyContact);

module.exports = router;
