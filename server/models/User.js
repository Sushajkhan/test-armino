const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bookmarkedLocations: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
