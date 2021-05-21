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

const price = [
  body("price")
    .not()
    .isEmpty()
    .trim()
    .isNumeric()
    .isLength({ min: 2, max: 8 })
    .withMessage("college name is too long "),
];

module.exports = { name, price };
