const { Contact } = require("../../models/contactsModel");

const getContacts = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const getAllContacts = await Contact.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email");
  res.status(200).json({ msg: getAllContacts, status: "success" });
};

module.exports = getContacts;
