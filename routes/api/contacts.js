const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { isValidId, validation, ctrlWrapper } = require("../../middlewares");
const {
  joiContactSchema,
  joiFavoriteSchema,
} = require("../../models/contactsModel");

router.get("/", ctrlWrapper(ctrl.getContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validation(joiContactSchema), ctrlWrapper(ctrl.addNewContact));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.deleteContact));

router.put(
  "/:contactId",
  isValidId,
  validation(joiContactSchema),
  ctrlWrapper(ctrl.modifyContact)
);

router.patch(
  "/:contactId/favorite",
  validation(joiFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
