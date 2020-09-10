const express = require("express");
const router = express.Router();

// Load Controllers
const {
  registerController,
  activationController,
  signinController,
  forgotPasswordController,
  resetPasswordController,
  googleController,
  facebookController,
} = require("../controllers/auth.controller");

router.post("/register", registerController);
router.post("/activation", activationController);
router.post("/login", signinController);
router.put("/forgotpassword", forgotPasswordController);
router.put("/resetpassword", resetPasswordController);

module.exports = router;
