const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// ==========================================================
const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Anton:k6FnCNPds7p8HxL@cluster0.gr3dwkh.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect"))
  .catch((error) => console.log("Error"));

// ==========================================================

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;

// k6FnCNPds7p8HxL

// mongodb+srv://Anton:k6FnCNPds7p8HxL@cluster0.gr3dwkh.mongodb.net/test
