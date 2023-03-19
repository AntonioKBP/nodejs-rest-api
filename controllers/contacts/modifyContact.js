const { Contact } = require("../../models/contactsModel");

// const { updateContact } = require("../../models/contacts");

const modifyContact = async (req, res, next) => {
  const { contactId } = req.params;
  const body = req.body;
  const renameContact = await Contact.findByIdAndUpdate(
    contactId,
    {
      name: body.name,
    },
    { email: body.email },
    { phone: body.phone },
    { new: true }
  );
  res.status(200).json({ msg: renameContact });
  // if (renameContact) {
  //   res.status(200).json({ msg: renameContact });
  // } else {
  //   res.status(404).json({ message: "Not found" });
  // }
};

module.exports = modifyContact;
