const { User } = require("../../models/usersModel");

const updateSubscription = async (req, res, next) => {
  const { _id, subscription, email } = req.user;

  await User.findByIdAndUpdate(_id, req.body);
  res.status(201).json({
    status: "success",
    data: { subscription, email },
  });
};

module.exports = updateSubscription;
