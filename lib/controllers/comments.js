"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCommentByUserId = exports.deleteCommentById = exports.updateCommentByUsersId = exports.updateCommentById = exports.getAllCommentByBlogId = exports.getCommentById = exports.addComment = exports.getAllComments = undefined;

var _comment = require("../models/comment");

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllComments = exports.getAllComments = function getAllComments(req, res, next) {
  _comment2.default.find({}).then(function (comments) {
    res.status(200).json({ comments: comments });
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var addComment = exports.addComment = function addComment(req, res, next) {
  var comment = new _comment2.default(req.body);
  comment.save().then(function (result) {
    res.status(200).json({ message: "Comments created successfully." });
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var getCommentById = exports.getCommentById = function getCommentById(req, res, next) {
  _comment2.default.find({ _id: req.params.id }).then(function (comment) {
    if (comment.length === 0) {
      res.status(200).json({ message: "Comments doesn't exists." });
    } else {
      res.status(200).json({ comments: comments });
    }
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var getAllCommentByBlogId = exports.getAllCommentByBlogId = function getAllCommentByBlogId(req, res, next) {
  _comment2.default.find({ blogId: req.params.id }).then(function (comments) {
    if (comments.length === 0) {
      res.status(200).json({ message: "Comments doesn't exists." });
    } else {
      res.status(200).json({ comments: comments });
    }
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var updateCommentById = exports.updateCommentById = function updateCommentById(req, res, next) {
  _comment2.default.findOneAndUpdate(req.params.id, req.body).then(function (blog) {
    res.status(200).json({ comment: comment });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error updating." });
  });
};

var updateCommentByUsersId = exports.updateCommentByUsersId = function updateCommentByUsersId(req, res, next) {
  _comment2.default.findOneAndUpdate({ _id: req.params.id, userId: req.body.userId }, req.body).then(function (blog) {
    res.status(200).json({ comment: comment });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error updating." });
  });
};

var deleteCommentById = exports.deleteCommentById = function deleteCommentById(req, res, next) {
  _comment2.default.findOneAndRemove({ _id: req.params.id }).then(function (comment) {
    res.status(200).json({ comment: comment });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error deleting." });
  });
};

var deleteCommentByUserId = exports.deleteCommentByUserId = function deleteCommentByUserId(req, res, next) {
  _comment2.default.findOneAndRemove({ _id: req.params.id, userId: req.body.userId }).then(function (comment) {
    res.status(200).json({ comment: comment });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error deleting." });
  });
};