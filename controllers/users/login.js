const { Unauthorized } = require("http-errors");
const { User } = require("../../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized({ message: "Email or password is wrong" });
  }

  const passwordCompare = bcrypt.compareSync(password, user.password);
  if (!passwordCompare) {
    throw new Unauthorized({ message: "Email or password is wrong" });
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: "success",
    data: {
      token,
      user: { email, subscription },
    },
  });
};

module.exports = login;
