"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _users = require("./routes/users");

var _users2 = _interopRequireDefault(_users);

var _blogs = require("./routes/blogs");

var _blogs2 = _interopRequireDefault(_blogs);

var _comments = require("./routes/comments");

var _comments2 = _interopRequireDefault(_comments);

var _database = require("./configs/database");

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CREATE APP
var app = (0, _express2.default)();
var port = process.env.PORT || 4000;

// CONNECT TO DATABASE
//mongoose.connect(config.localUrl, { useNewUrlParser: true });

_mongoose2.default.connect(_database2.default.remoteUrl, { useNewUrlParser: true });
_mongoose2.default.connection.once("open", function () {
  console.log("Database Connection made Successfully.");
});
_mongoose2.default.connection.on("err", function () {
  console.log(err);
});

// MIDDLEWARE
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.use((0, _cors2.default)());

// SET STATIC FOLDER
app.use(_express2.default.static(_path2.default.join(__dirname, "public")));

// ROUTES
app.use("/api/users", _users2.default);
app.use("/api/blogs", _blogs2.default);
app.use("/api/comments", _comments2.default);

// INDEX ROUTES
app.get("/", function (req, res) {
  res.send("invaild endpoint");
});

app.get("*", function (req, res) {
  res.sendFile(_path2.default.join(__dirname, "public/index.html"));
});

// SERVER STARTED
app.listen(port, function () {
  console.log("Server started at : " + port);
});