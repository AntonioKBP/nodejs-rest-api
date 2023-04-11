const express = require("express");

const { ctrlWrapper, validation, auth, upload } = require("../../middlewares");

const {
  joiSignUpSchema,
  joiLoginSchema,
  joiUpdateSubSchema,
  joiVerifySchema,
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

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post(
  "/verify",
  validation(joiVerifySchema),
  ctrlWrapper(ctrl.resendVerifyEmail)
);

module.exports = router;
