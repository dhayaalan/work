const { validationResult } = require("express-validator");
const { Admin } = require("../models/user");
const user = require("../validation/user");
const admin = require("../validation/user");

const errorscheck = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.mapped() });
  next();
};

const erroradmin = async (req, res, next) => {
  const isadmin = await user.findbyPk(req.userId);
  if (isadmin.get("type") === "admin") next();
  return res.status(200).json({ msg: "cannot be accessed" });
};

(module.exports = errorscheck), erroradmin;
