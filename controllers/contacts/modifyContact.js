const { updateContact } = require("../../models/contacts");

const modifyContact = async (req, res, next) => {
  const renameContact = await updateContact(req.params.contactId, req.body);
  if (renameContact) {
    res.status(200).json({ msg: renameContact });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = modifyContact;
