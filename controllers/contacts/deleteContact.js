const { removeContact } = require("../../models/contacts");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const deleteById = await removeContact(contactId);
  if (deleteById) {
    return res.status(200).json({ message: "contact deleted" });
  } else {
    return res.status(404).json({ message: "Not found" });
  }
};

module.exports = deleteContact;
