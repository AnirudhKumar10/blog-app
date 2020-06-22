"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _comments = require("../controllers/comments");

var _checkAuth = require("../middlewares/check-auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

route.get("/", _comments.getAllComments);

route.post("/", _checkAuth.checkAuth, _comments.addComment);

route.get("/:id", _comments.getCommentById);

route.get("/blog/:id", _comments.getAllCommentByBlogId);

route.put("/update/:id", _checkAuth.checkAuth, _comments.updateCommentById);

route.put("/update/user/:id", _checkAuth.checkAuth, _comments.updateCommentByUsersId);

route.delete("/delete/:id", _checkAuth.checkAuth, _comments.deleteCommentById);

route.delete("/delete/user/:id", _checkAuth.checkAuth, _comments.deleteCommentByUserId);

exports.default = route;