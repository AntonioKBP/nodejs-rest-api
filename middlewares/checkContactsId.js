const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join("models", "contacts.json");

const checkContactsId = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const dataFromDB = await fs.readFile(contactsPath);
    const contacts = JSON.parse(dataFromDB);
    const contact = contacts.find((elem) => elem.id === contactId);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    req.contact = contact;
    next();
  } catch (error) {}
};

module.exports = checkContactsId;
