const { validationResult } = require("express-validator");
const User = require("../models/user");

const erroradmin = async (req, res, next) => {
  const user = await User.findByPk(req.body.id);
  if (user.get("type") !== "admin")
    return res.status(404).json({ msg: "cannot be accessed" });
  next();
};

module.exports = { erroradmin };
