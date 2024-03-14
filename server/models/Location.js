const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema(
  {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
  { timestamps: true }
);

const Locatio = mongoose.model("User", locationSchema);
module.exports = User;
