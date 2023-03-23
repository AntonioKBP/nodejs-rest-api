const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const {
  isValidId,
  validation,
  ctrlWrapper,
  auth,
} = require("../../middlewares");
const {
  joiContactSchema,
  joiFavoriteSchema,
} = require("../../models/contactsModel");

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post(
  "/",
  auth,
  validation(joiContactSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", auth, isValidId, ctrlWrapper(ctrl.deleteContact));

router.put(
  "/:contactId",
  auth,
  isValidId,
  validation(joiContactSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  auth,
  validation(joiFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
