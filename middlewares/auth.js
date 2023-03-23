const { Unauthorized } = require("http-errors");
const { User } = require("../models/usersModel");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (bearer !== "Bearer" || !token) {
      throw new Unauthorized({
        message: "Not authorized",
      });
    }
    if (!user || !token) {
      throw new Unauthorized({
        message: "Not authorized",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === "Invalid signature") {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = auth;
