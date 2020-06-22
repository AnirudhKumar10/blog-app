"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBlogByUserId = exports.updateBlogByUserId = exports.getAllBlogByUserId = exports.getBlogByUserId = exports.deleteBlogById = exports.updateBlogById = exports.getBlogById = exports.addBlog = exports.getAllBlogs = undefined;

var _blog = require("../models/blog");

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllBlogs = exports.getAllBlogs = function getAllBlogs(req, res, next) {
  _blog2.default.find({}).then(function (blogs) {
    res.status(200).json({ blogs: blogs });
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var addBlog = exports.addBlog = function addBlog(req, res, next) {
  var blog = new _blog2.default(req.body);
  blog.save().then(function (result) {
    res.status(200).json({ message: "Blog created successfully." });
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var getBlogById = exports.getBlogById = function getBlogById(req, res, next) {
  _blog2.default.find({ _id: req.params.id }).then(function (blog) {
    if (blog.length === 0) {
      res.status(404).json({ message: "Blog doesn't exists." });
    } else {
      res.status(200).json({ blog: blog });
    }
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var updateBlogById = exports.updateBlogById = function updateBlogById(req, res, next) {
  User.findOneAndUpdate(req.params.id, req.body).then(function (blog) {
    res.status(200).json({ blog: blog });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error updating." });
  });
};

var deleteBlogById = exports.deleteBlogById = function deleteBlogById(req, res, next) {
  User.findOneAndRemove(req.params.id).then(function (blog) {
    res.status(200).json({ blog: blog });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error deleting." });
  });
};

var getBlogByUserId = exports.getBlogByUserId = function getBlogByUserId(req, res, next) {
  _blog2.default.find({ _id: req.params.id }).then(function (blog) {
    if (blog.length === 0) {
      res.status(404).json({ message: "Blog doesn't exists." });
    } else {
      res.status(200).json({ blog: blog });
    }
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var getAllBlogByUserId = exports.getAllBlogByUserId = function getAllBlogByUserId(req, res, next) {
  _blog2.default.find({ userId: req.params.id }).then(function (blogs) {
    if (blogs.length === 0) {
      res.status(404).json({ message: "Blog doesn't exists." });
    } else {
      res.status(200).json({ blogs: blogs });
    }
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var updateBlogByUserId = exports.updateBlogByUserId = function updateBlogByUserId(req, res, next) {
  _blog2.default.findOneAndUpdate({ _id: req.params.id, userId: req.body.userId }, req.body).then(function (blog) {
    res.status(200).json({ blog: blog });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error updating." });
  });
};

var deleteBlogByUserId = exports.deleteBlogByUserId = function deleteBlogByUserId(req, res, next) {
  _blog2.default.findOneAndRemove({ _id: req.params.id, userId: req.body.userId }).then(function (blog) {
    res.status(200).json({ blog: blog });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error deleting." });
  });
};