const mongoose = require("mongoose");
const Post = require("./Post");
const Group = require("./Group");

const BoardSchema = new mongoose.Schema({
  posts: [{ type: String, ref: "Post" }],
  category: String,
  groupBelong: { type: String, required: true, ref: "Group" }
});

module.exports = mongoose.model("Board", BoardSchema);
module.exports = BoardSchema;
