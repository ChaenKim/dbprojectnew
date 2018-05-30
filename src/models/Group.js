const mongoose = require("mongoose");
const User = require("./User");
const Board = require("./Board");

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  members: [{ type: String, ref: "User" }],
  managers: [{ type: String, ref: "User" }],
  boards: [{type:String, ref: "Board"}]
});

module.exports = mongoose.model("Group", GroupSchema);
module.exports = GroupSchema;
