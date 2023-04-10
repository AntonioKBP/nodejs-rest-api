const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

// ===============================================
// const sgMail = require("@sendgrid/mail");
// ===============================================

dotenv.config();

// ==================== SendGrid ===========================

// const { SENDGRID_API_KEY } = process.env;
// sgMail.setApiKey(SENDGRID_API_KEY);

// const email = {
//   to: "najig68255@fectode.com",
//   from: "kovsh_anton@ukr.net",
//   subject: "Check mail",
//   html: "<p>Check Test HTML</p>",
// };

// sgMail
//   .send(email)
//   .then(() => console.log("Email sent successfully"))
//   .catch((error) => console.log(error.message));
// ===============================================

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
