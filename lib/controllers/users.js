"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.addUser = exports.getAllUsers = exports.register = exports.login = undefined;

var _user = require("../models/user");

var _user2 = _interopRequireDefault(_user);

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(req, res, next) {
  _user2.default.find({ email: req.body.email }).then(function (user) {
    if (user.length === 1) {
      _bcrypt2.default.compare(req.body.password, user[0].password).then(function (result) {
        if (result) {
          var token = _jsonwebtoken2.default.sign({ email: user[0].email, userId: user[0]._id }, "secret");
          res.status(200).json({
            message: "Auth Successfull",
            userId: user[0]._id,
            userEmailL: user[0].email,
            token: token
          });
        } else {
          res.status(404).json({
            message: "Auth Failed."
          });
        }
      });
    } else {
      res.status(404).json({
        message: "Email not found."
      });
    }
  });
};

var register = exports.register = function register(req, res, next) {
  _user2.default.find({ email: req.body.email }).then(function (user) {
    if (user.length >= 1) {
      res.status(409).json({ message: "Email already exits." });
    } else {
      _bcrypt2.default.hash(req.body.password, 10).then(function (hash) {
        user = new _user2.default({ email: req.body.email, password: hash });
        user.save().then(function () {
          res.status(201).json({ message: "User was successfully created." });
        });
      }).catch(function () {
        res.status(201).json({ message: "Error while creating record." });
      });
    }
  });
};

var getAllUsers = exports.getAllUsers = function getAllUsers(req, res, next) {
  _user2.default.find({}).then(function (users) {
    res.status(200).json({ users: users });
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var addUser = exports.addUser = function addUser(req, res, next) {
  _user2.default.find({ email: req.body.email }).then(function (user) {
    if (user.length >= 1) {
      res.status(409).json({ message: "Email already exits." });
    } else {
      _bcrypt2.default.hash(req.body.password, 10).then(function (hash) {
        user = new _user2.default({ email: req.body.email, password: hash });
        user.save().then(function () {
          res.status(201).json({ message: "User was successfully created." });
        });
      }).catch(function () {
        res.status(201).json({ message: "Error while creating record." });
      });
    }
  });
};

var getUserById = exports.getUserById = function getUserById(req, res, next) {
  _user2.default.find({ _id: req.params.id }).then(function (user) {
    if (user.length === 0) {
      res.status(404).json({ message: "User doesn't exists." });
    } else {
      res.status(200).json({ user: user });
    }
  }).catch(function () {
    res.status(404).json({ message: "There was some error." });
  });
};

var updateUserById = exports.updateUserById = function updateUserById(req, res, next) {
  _user2.default.findOneAndUpdate(req.params.id, req.body).then(function (user) {
    res.status(200).json({ user: user });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error updating." });
  });
};

var deleteUserById = exports.deleteUserById = function deleteUserById(req, res, next) {
  _user2.default.findOneAndRemove({ _id: req.params.id }).then(function (user) {
    res.status(200).json({ user: user });
  }).catch(function (err) {
    res.status(404).json({ message: "There was error deleting." });
  });
};