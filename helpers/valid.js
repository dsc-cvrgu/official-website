const { check } = require("express-validator");

exports.validRegister = [
  check("name", "Name is required")
    .not()
    .isEmpty()
    .isLength({
      min: 3,
      max: 32,
    })
    .withMessage("name must be between 3 to 32 characters"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password", "Password is required").notEmpty(),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a digit"),
];

exports.validLogin = [
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password", "Password is required").notEmpty(),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number"),
];

exports.forgotPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Must be a valid email address"),
];

exports.resetPasswordValidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least  6 characters long"),
];
