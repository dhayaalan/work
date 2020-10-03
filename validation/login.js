const { body } = require("express-validator"),
  { default: validator } = require("validator");

const emailId = [
  body("emailId")
    .not()
    .trim()
    .isEmpty()
    .isEmail()
    .isLength({ min: 2, max: 30 })
    .withMessage("id must be min of 2 character and max of 15 character:"),
];
const password = [
  body("password")
    .not()
    .trim()
    .isEmpty()
    .isAlphanumeric()
    .isLength({ min: 5, max: 20 })
    .withMessage(" name must be min of 5 character and max of 20 character:"),
];

module.exports = { emailId, password };
