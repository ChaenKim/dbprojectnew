const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNum: { type: String, required: true },
  email: { type: String, required: true },
  password: String
});

module.exports = mongoose.model("User", UserSchema);
module.exports = UserSchema;
