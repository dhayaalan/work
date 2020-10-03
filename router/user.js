const express = require("express");

const adminController = require("../controller/user");
const errorMiddeleware = require("../middleware/errorcheck");
const {
  firstname,
  lastname,
  emailId,
  password,
} = require("../validation/user");

const routes = express.Router();

routes.post(
  "/register",
  firstname,
  lastname,
  emailId,
  password,
  errorMiddeleware,
  adminController.register
);

module.exports = routes;
