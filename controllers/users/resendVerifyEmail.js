const { User } = require("../../models/usersModel");
const { NotFound } = require("http-errors");
const sendEmail = require("../../helpers/sendEmail");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw NotFound();
  }

  if (user.verify) {
    res.status(400).json({ message: "Verification has already been passed" });
  }

  const mail = {
    to: email,
    subject: "Confirm email",
    html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}">Confirm email on this link</a>`,
  };

  await sendEmail(mail);

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
