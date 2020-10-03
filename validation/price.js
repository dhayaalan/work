const { body } = require("express-validator"),
  { default: validator } = require("validator");

const price = [
  body("price")
    .not()
    .isEmpty()
    .trim()
    .isNumeric()
    .isLength({ min: 2, max: 8 })
    .withMessage("college name is too long "),
];

module.exports = { price };
