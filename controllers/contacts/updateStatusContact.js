const { Contact } = require("../../models/contactsModel");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;

  const { favorite } = req.body;
  const changeFavorite = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },

    { new: true }
  );

  if (changeFavorite) {
    res.status(200).json({ msg: changeFavorite });
  }
};

module.exports = updateStatusContact;
