const { Contact } = require("../../models/contactsModel");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const getId = await Contact.findById(contactId);
  if (getId) {
    return res.status(200).json({ data: getId });
  } else {
    return res.status(404).json({ message: "Not found" });
  }
};

module.exports = getById;
