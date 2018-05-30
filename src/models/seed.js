const mongoose = require("mongoose");

const BoardSchema = require("./Board");
const CommentSchema = require("./Comment");
const GroupSchema = require("./Group");
const PostSchema = require("./Post");
const UserSchema = require("./User");

const Board = mongoose.model("Board", BoardSchema);
const Comment = mongoose.model("Comment", CommentSchema);
const Group = mongoose.model("Group", GroupSchema);
const Post = mongoose.model("Post", PostSchema);
const User = mongoose.model("User", UserSchema);

try {
  mongoose.connect("mongodb://localhost/dbProjectNew");
  console.log("connected");
} catch (err) {
  console.log("connect error");
  console.log(err.message);
}

async function initDB() {
  try {
    await Board.remove();
    await Comment.remove();
    await Group.remove();
    await Post.remove();
    await User.remove();

    const user1 = new User({
      name: "Chaen Kim",
      phoneNum: "010-1234-5678",
      email: "chaen42@ajou.ac.kr",
      password: "password"
    });

    const user2 = new User({
      name: "Kwak",
      phoneNum: "010-4321-8765",
      email: "kwak@ajou.ac.kr",
      password: "password"
    });

    await user1.save((err, result) => {
      if (err) console.log(err.message);
      console.log(result.name + ": saved");
    });

    await user2.save((err, result) => {
      if (err) console.log(err.message);
      console.log(result.name + ": saved");
    });

    const group1 = new Group({
      name: "English Life",
      description: "We practice English conversation with our members",
      members: [user1, user2],
      managers: [user1]
    });
    await group1.save((err, result) => {
      if (err) console.log(err.message);
      console.log(result.name + ": saved");
    });

    const comment1 = new Comment({
      writer: "Chaen Kim",
      contents: "Feel Free to come. We'll have some dinner after the meeting."
    });

    const comment2 = new Comment({
      writer: "Kwak",
      contents: "I'm comming."
    });

    await comment1.save((err, result) => {
      if (err) console.log(err.message);
      console.log("comment1 : saved");
    });

    await comment2.save((err, result) => {
      if (err) console.log(err.message);
      console.log("comment2 : saved");
    });

    const post1 = new Post({
      title: "NOTICE - 1st meeting date time place",
      uploader: user1,
      contents:
        "We have our fist meeting\nDate:2018-04-28\nTime:3PM\nPlace:ClubRoom",
      isNotice: true,
      clickNum: 5,
      commments: [comment1, comment2]
    });

    await post1.save((err, result) => {
      if (err) console.log(err.message);
      console.log("post1 : saved");
    });

    const board1 = new Board({
      posts: [post1],
      category: "MeetingBoard",
      groupBelong: group1
    });

    await board1.save((err, result) => {
      if (err) console.log(err.message);
      console.log("board1 : saved");
    });
  } catch (err) {
    console.log(err.message);
  }
}

try {
  initDB();
} catch (err) {
  console.log("error", err.message);
  return err;
}
