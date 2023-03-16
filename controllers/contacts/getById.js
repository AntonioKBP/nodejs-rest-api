const { getContactById } = require("../../models/contacts");

const getById = async (req, res, next) => {
  const getId = await getContactById(req.params.contactId);
  if (getId) {
    return res.status(200).json({ data: getId });
  } else {
    return res.status(404).json({ message: "Not found" });
  }
};

module.exports = getById;
