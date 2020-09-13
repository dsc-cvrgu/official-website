const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
