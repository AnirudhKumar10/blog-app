"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blogSchema = _mongoose2.default.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  userId: { type: _mongoose2.default.Schema.Types.ObjectId, required: true }
});

exports.default = _mongoose2.default.model("Blog", blogSchema, "blogs");