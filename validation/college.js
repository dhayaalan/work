const { body } = require("express-validator"),
  { default: validator } = require("validator");

const name = [
  body("name")
    .not()
    .isEmpty()
    .trim()
    .isAlpha()
    .isLength({ min: 2, max: 30 })
    .withMessage("college name is too long "),
];

module.exports = { name };
