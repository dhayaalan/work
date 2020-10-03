const express = require("express");

const loginController = require("../controller/login");
const { emailId, password } = require("../validation/login");
const errorMiddileware = require("../middleware/errorcheck");

const routes = express.Router();

routes.post(
  "/login",
  emailId,
  password,
  errorMiddileware,
  loginController.Login
);

module.exports = routes;
