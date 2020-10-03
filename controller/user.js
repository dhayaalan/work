const Admin = require("../models/admin");

exports.register = async (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const emailId = req.body.emailId;
  const password = req.body.password;
  await Admin.create({
    firstname: firstname,
    lastname: lastname,
    emailId: emailId,
    password: password,
  });
  res.status(200).json({
    firstname: firstname,
    lastname: lastname,
    emailId: emailId,
    password: password,
  });
};


