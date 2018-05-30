const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  writer: { type: String, required: true },
  date: { type: Date, required: false }, // TODO: date and time required change
  time: { type: String, required: false }, // TODO: time type check!
  contents: { type: String, required: true }
});

module.exports = mongoose.model("Comment", CommentSchema);
module.exports = CommentSchema;
