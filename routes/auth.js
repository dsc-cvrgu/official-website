const express = require("express");
const router = express.Router();

// Load Controllers

router.post("/register", registerController);
router.post("/activation", activationController);
router.post("/login", signinController);
router.put("/forgotpassword", forgotPasswordController);
router.put("/resetpassword", resetPasswordController);
router.get("/logout", logout);

module.exports = router;
