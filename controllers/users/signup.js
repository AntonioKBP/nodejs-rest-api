const { Conflict } = require("http-errors");
const { User } = require("../../models/usersModel");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict({ message: "Email in use" });
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({ email, password: hashPassword, subscription });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: { email, subscription },
    },
  });
};

module.exports = signup;
