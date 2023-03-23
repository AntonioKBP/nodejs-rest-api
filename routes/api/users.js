const express = require("express");

const { ctrlWrapper, validation, auth } = require("../../middlewares");

const {
  joiSignUpSchema,
  joiLoginSchema,
  joiUpdateSubSchema,
} = require("../../models/usersModel");

const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(joiSignUpSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.post("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch(
  "/",
  auth,
  validation(joiUpdateSubSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
