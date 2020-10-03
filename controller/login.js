const Login = require("../models/login");

exports.Login = async (req, res) => {
  const emailId = req.body.emailId;
  const password = req.body.password;
  await Login.create({
    emailId: emailId,
    password: password,
  });
  res.status(200).json({
    emailId: emailId,
    password: password,
  });
};
exports.logout = (req, res, next) => {
  res.status(200).json({
    id: "",
    name: "",
  });
};
