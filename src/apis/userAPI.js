const express = require("express");
const app = express();
const Router = express.Router();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var ObjectID = require("mongodb").ObjectID;
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);

const BoardSchema = require("../models/Board");
const CommentSchema = require("../models/Comment");
const GroupSchema = require("../models/Group");
const PostSchema = require("../models/Post");
const UserSchema = require("../models/User");

const Board = mongoose.model("Board", BoardSchema);
const Comment = mongoose.model("Comment", CommentSchema);
const Group = mongoose.model("Group", GroupSchema);
const Post = mongoose.model("Post", PostSchema);
const User = mongoose.model("User", UserSchema);

const port = process.env.PORT || 8080;

var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", require("./routes/home"));
// app.use("/posts", require("./routes/posts"));

// include routes
// var routes = require("../routers/router");
// app.use("/", routes);

try {
  mongoose.connect("mongodb://localhost/dbProjectNew");
  console.log("connected");
} catch (err) {
  console.log("connect error");
  console.log(err.message);
}

// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }));

/*
 *  // error handler
 *  // define as the last app.use callback
 *  app.use(function (err, req, res, next) {
 *    res.status(err.status || 500);
 *    res.send({
 *      error: {
 *        status: err.status,
 *        message: err.message
 *      }
 *    });
 *  });
 */

/*
  - 새로운 회원가입을 하기 위한 메소드
  - User 테이블에 새 user 추가
 > Request parameter
   name : 학생 이름
   phoneNum : 핸드폰번호
   email : 아주대 계정 이메일
   password : 비밀번호
 > Response output

 */
app.get("/SignUp/:name/:phoneNum/:email/:pw", function(req, res) {
  mongoose.Promise = global.Promise;
  const name = req.params.name;
  const phoneNum = req.params.phoneNum;
  const email = req.params.email;
  const pw = req.params.pw;

  const newUser = new User({
    name: name,
    phoneNum: phoneNum,
    email: email,
    password: pw
  });

  newUser.save((err, result) => {
    if (err) console.log(err.message);
    res.send("success");
  });
});

/*
  - 로그인을 하기 위한 메소드
  - 이메일과 비밀번호로 유저 체크
 > Request parameter
   email : 아주대 계정 이메일
   password : 비밀번호
 > Response output

 */
app.post("/SignIn/:email/:password", async function(req, res) {
  try {
    mongoose.Promise = global.Promise;
    const email = req.params.email;
    const password = req.params.password;
    const user = await User.findOne({
      email: email,
      password: password
    });
    if(user){
      res.send(user);
    }else{
      res.send("login fail");
    }
  } catch (err) {
    console.log(err.message);
    res.send("login fail", err.message);
  }
});

app.get("/getAllGroups", async function(req, res) {
  try {
    mongoose.Promise = global.Promise;
    const g = await Group.find();
    res.send(g);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, function(req, res) {
  console.log("app is listening on " + port);
});
