"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentSchema = _mongoose2.default.Schema({
  comment: { type: String, required: true },
  blogId: { type: _mongoose2.default.Schema.Types.ObjectId, required: true },
  userId: { type: _mongoose2.default.Schema.Types.ObjectId, required: true }
});

exports.default = _mongoose2.default.model("Comment", commentSchema, "comments");