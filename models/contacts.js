// const { v4 } = require("uuid");

const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join("models", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const getContact = contacts.find((contact) => contact.id === contactId);

    return getContact;
  } catch (error) {
    console.log(error);
  }
}

async function addContact(data) {
  try {
    const contacts = await listContacts();
    const newContact = { ...data };
    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const removeContact = contacts.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(removeContact));
    return removeContact;
  } catch (error) {
    console.log(error);
  }
}

const updateContact = async (contactId, body) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    contacts.map((contact) => {
      if (contactId === contact.id) {
        contact.name = body.name;
        contact.email = body.email;
        contact.phone = body.phone;
      }

      return contact;
    });

    await fs.writeFile(contactsPath, JSON.stringify(contacts));

    return contacts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
