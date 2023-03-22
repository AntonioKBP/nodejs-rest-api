const express = require("express");

const { ctrlWrapper, validation, auth } = require("../../middlewares");

// const { schemaAddUser } = require("../../models/usersModel");
const {
  joiSignUpSchema,
  joiLoginSchema,
  joiUpdateSubSchema,
} = require("../../models/usersModel");

// const { users: ctrl } = require("../../controllers/");

const signup = require("../../controllers/users/signup");
const login = require("../../controllers/users/login");
const getCurrent = require("../../controllers/users/getCurrent");
const logout = require("../../controllers/users/logout");
const updateSubscription = require("../../controllers/users/updateSubscription");

const router = express.Router();

router.post("/signup", validation(joiSignUpSchema), ctrlWrapper(signup));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(login));

router.post("/current", auth, ctrlWrapper(getCurrent));

router.get("/logout", auth, ctrlWrapper(logout));

router.patch(
  "/",
  auth,
  validation(joiUpdateSubSchema),
  ctrlWrapper(updateSubscription)
);

module.exports = router;

// isValidId, validation,
