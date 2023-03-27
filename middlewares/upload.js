const path = require("path");
const multer = require("multer");
// const fs = require("fs/promises");
// const { v4 } = require("uuid");

const tempDir = path.join(__dirname, "../", "temp");
// const targetDir = path.resolve(__dirname, "../", "public", "avatars");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;

// const contacts = [];
// console.log(contacts);

// router.post("/upload", upload.single("image"), async (req, res) => {
//   const { path: tempDir, originalname } = req.file;
//   const resultUpload = path.join(targetDir, originalname);

//   try {
//     await fs.rename(tempDir, resultUpload);
//     const image = path.resolve("public", "avatars", originalname);
//     const newContact = {
//       name: req.body.name,
//       id: v4(),
//       image,
//     };
//     contacts.push(newContact);
//     res.status(201).json(newContact);
//   } catch (error) {
//     await fs.unlink(tempDir);
//   }
// });
