const mongoose = require("mongoose");
const User = require("./User");
const Comment = require("./Comment");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  uploader: { type: String, ref: "User" },
  contents: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date },
  isNotice: Boolean,
  clickNum: { type: Number, default: 0 },
  commments: [{ type: String, ref: "Comment" }]
});

// virtuals // 3
PostSchema.virtual("createdDate").get(function() {
  return getDate(this.createdAt);
});

PostSchema.virtual("createdTime").get(function() {
  return getTime(this.createdAt);
});

PostSchema.virtual("updatedDate").get(function() {
  return getDate(this.updatedAt);
});

PostSchema.virtual("updatedTime").get(function() {
  return getTime(this.updatedAt);
});

// model & export
module.exports = mongoose.model("Post", PostSchema);
module.exports = PostSchema;

// functions
function getDate(dateObj) {
  if (dateObj instanceof Date)
    return (
      dateObj.getFullYear() +
      "-" +
      get2digits(dateObj.getMonth() + 1) +
      "-" +
      get2digits(dateObj.getDate())
    );
}

function getTime(dateObj) {
  if (dateObj instanceof Date)
    return (
      get2digits(dateObj.getHours()) +
      ":" +
      get2digits(dateObj.getMinutes()) +
      ":" +
      get2digits(dateObj.getSeconds())
    );
}

function get2digits(num) {
  return ("0" + num).slice(-2);
}
