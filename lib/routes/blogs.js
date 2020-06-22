"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _blogs = require("../controllers/blogs");

var _checkAuth = require("../middlewares/check-auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

route.get("/", _blogs.getAllBlogs);

route.post("/", _checkAuth.checkAuth, _blogs.addBlog);

route.get("/:id", _blogs.getBlogById);

route.get("/user/:id", _checkAuth.checkAuth, _blogs.getBlogByUserId);

route.get("/user/all/:id", _checkAuth.checkAuth, _blogs.getAllBlogByUserId);

route.put("/update/:id", _checkAuth.checkAuth, _blogs.updateBlogById);

route.put("/update/user/:id", _checkAuth.checkAuth, _blogs.updateBlogByUserId);

route.delete("/delete/:id", _checkAuth.checkAuth, _blogs.deleteBlogById);

route.delete("/delete/user/:id", _checkAuth.checkAuth, _blogs.deleteBlogByUserId);

exports.default = route;