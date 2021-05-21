const { body } = require("express-validator");
const { validator } = require("validator");

const firstname = [
  body("firstname")
    .not()
    .trim()
    .isEmpty()
    .isLength({ min: 2, max: 10 })
    .withMessage("id must be min of 2 character and max of 15 character:"),
];
const lastname = [
  body("lastname")
    .not()
    .trim()
    .isEmpty()
    .isAlpha()
    .isLength({ min: 5, max: 10 })
    .withMessage(" name must be min of 5 character and max of 20 character:"),
];
const emailId = [
  body("emailId")
    .not()
    .trim()
    .isEmpty()
    .isEmail()
    .isLength({ min: 10, max: 30 })
    .withMessage("email should not be more than 30 character:"),
];
const password = [
  body("password")
    .not()
    .trim()
    .isEmpty()
    .isAlphanumeric()
    .isLength({ min: 2, max: 8 })
    .withMessage(" password min of 2 character and max of 8 character:"),
];
const confirmpassword = [
  body("confirmpassword")
    .not()
    .trim()
    .isEmpty()
    .isAlphanumeric()
    .isLength({ min: 2, max: 8 })
    .withMessage("password min of 2 character and max of 8 chracter:"),
];

module.exports = { firstname, lastname, emailId, password ,confirmpassword};
