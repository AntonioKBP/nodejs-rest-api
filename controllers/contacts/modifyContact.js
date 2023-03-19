const { Contact } = require("../../models/contactsModel");

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
};

module.exports = modifyContact;
