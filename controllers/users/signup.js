const { Conflict } = require("http-errors");
const { User } = require("../../models/usersModel");
const sendEmail = require("../../helpers/sendEmail");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4 } = require("uuid");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict({ message: "Email in use" });
  }
  const avatarUrl = gravatar.url(email, { size: "200", default: "monsterid" });
  const verificationToken = v4();

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarUrl,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Confirm email",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email on this link</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: { email, subscription, avatarUrl, verificationToken },
    },
  });
};

module.exports = signup;
