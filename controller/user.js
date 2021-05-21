const User = require("../models/user");

exports.register = async (req, res, next) => {
  const id = req.body.id;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const emailId = req.body.emailId;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  if (password !== confirmPassword)
    return res
      .status(404)
      .json({ message: "password and confirm passwrod doesnt match: " });
  next();
  await User.create({
    id: id,
    firstname: firstname,
    lastname: lastname,
    emailId: emailId,
    password: password,
    confirmPassword: confirmPassword,
  });
  res.status(200).json({
    id: id,
    firstname: firstname,
    lastname: lastname,
    emailId: emailId,
    password: password,
    confirmPassword: confirmPassword,
  });
};
