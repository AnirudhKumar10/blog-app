"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _users = require("../controllers/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

route.post("/login", _users.login);

route.post("/register", _users.register);

route.get("/", _users.getAllUsers);

route.post("/", _users.addUser);

route.get("/:id", _users.getUserById);

route.put("/update/:id", _users.updateUserById);

route.delete("/delete/:id", _users.deleteUserById);

exports.default = route;