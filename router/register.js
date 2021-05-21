const express = require("express");
const loginController = require("../controller/login");
const {
  firstname,
  lastname,
  emailId,
  password,
  confirmpassword,
} = require("../validation/user");
const { errorscheck } = require("../middleware/errorcheck");
const routes = express.Router();
const { validationResult } = require("express-validator");
const User = require("../models/user");
const Login = require("../models/login");

routes.get("/register", (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("register", { errors: errors.array() });
  }
  res.render("register", { errors: "" });
});

routes.post(
  "/register",
  firstname,
  lastname,
  emailId,
  password,
  confirmpassword,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.mapped());
      return res.render("register", { errors: errors.mapped() });
    }
    
 

    const register = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      emailId: req.body.emailId,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
    });
    res.render("login", { errors: "", message: "register sucessfully" });
  }
);

routes.get("/login", (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("login", { errors: errors.array() });
  }
  res.render("login", { errors: "" });
});

routes.post("/login", emailId, password, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("login", { errors: errors.mapped() });
  }
  console.log(req.body);

  const register = await Login.create({
    emailId: req.body.emailId,
    password: req.body.password,
  });
  res.render("search", { errors: "", message: "register sucessfully" });
});



module.exports = routes;
