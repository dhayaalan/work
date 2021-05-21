const errorcheck = require("../middleware/errorcheck");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.Login = async (req, res) => {
  const emailId = req.body.emailId;
  const password = req.body.password;
  let isAdmin;
  const user = await User.findOne({
    where: { emailId: req.body.emailId },
  });
  if (!user) {
    return res.status(404).json({ message: "register first" });
  }
  if (user.get("password") !== req.body.password) {
    return res.status(404).json({ message: "password incorrect" });
  }
  let isLoggedIn;
  isLoggedIn = true;
  User.update(
    {
      islogged: isLoggedIn,
    },
    {
      where: { emailId: req.body.emailId },
    }
  );
  if (user.get("type") !== "admin") {
    isAdmin = false;
  } else {
    isAdmin = true;
  }

  const token = jwt.sign(
    {
      emailId: req.body.emailId,
    },
    "ilovecodetohaveafunwiththecode",
    {
      expiresIn: "30min",
    }
  );
  res
    .status(200)
    .json({ token: token, emailId: emailId, message: "token is genertaed:" });

  const url = "/admin-panel";
  res.status(200).json({
    token,
    adminPanel: {
      action: url,
      isAdmin: isAdmin,
    },
  });
};

exports.logout = async (req, res, next) => {
  res.status(200).json({});
};
