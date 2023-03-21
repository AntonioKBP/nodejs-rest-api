const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");

// const { schemaAddUser } = require("../../models/usersModel");
const { joiSignUpSchema, joiLoginSchema } = require("../../models/usersModel");

// const { users: ctrl } = require("../../controllers/");

const signup = require("../../controllers/users/signup");
const login = require("../../controllers/users/login");

const router = express.Router();

router.post("/signup", validation(joiSignUpSchema), ctrlWrapper(signup));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(login));

module.exports = router;

// isValidId, validation,
