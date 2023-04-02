const { User } = require("../../models/usersModel");
const path = require("path");
const fs = require("fs/promises");

const jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const avatarName = `${id}${originalname}`;
  try {
    const resultUpload = path.join(avatarsDir, avatarName);
    const image = await jimp.read(tempUpload);
    image.resize(250, 250, jimp.RESIZE_BEZIER);
    await image.write(resultUpload);
    const avatarUrl = path.join("public", "avatars", avatarName);
    await User.findByIdAndUpdate(req.user._id, { avatarUrl });
    res.json({ avatarUrl });
  } catch (error) {
    await fs.unlink(tempUpload);
  }
};

module.exports = updateAvatar;
