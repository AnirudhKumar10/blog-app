import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = (req, res, next) => {
  User.find({ email: req.body.email }).then((user) => {
    if (user.length === 1) {
      bcrypt.compare(req.body.password, user[0].password).then((result) => {
        if (result) {
          let token = jwt.sign(
            { email: user[0].email, userId: user[0]._id },
            "secret"
          );
          res.status(200).json({
            message: "Auth Successfull",
            userId: user[0]._id,
            userEmailL: user[0].email,
            token: token,
          });
        } else {
          res.status(404).json({
            message: "Auth Failed.",
          });
        }
      });
    } else {
      res.status(404).json({
        message: "Email not found.",
      });
    }
  });
};

export const register = (req, res, next) => {
  User.find({ email: req.body.email }).then((user) => {
    if (user.length >= 1) {
      res.status(409).json({ message: "Email already exits." });
    } else {
      bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
          user = new User({ email: req.body.email, password: hash });
          user.save().then(() => {
            res.status(201).json({ message: "User was successfully created." });
          });
        })
        .catch(() => {
          res.status(201).json({ message: "Error while creating record." });
        });
    }
  });
};

export const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const addUser = (req, res, next) => {
  User.find({ email: req.body.email }).then((user) => {
    if (user.length >= 1) {
      res.status(409).json({ message: "Email already exits." });
    } else {
      bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
          user = new User({ email: req.body.email, password: hash });
          user.save().then(() => {
            res.status(201).json({ message: "User was successfully created." });
          });
        })
        .catch(() => {
          res.status(201).json({ message: "Error while creating record." });
        });
    }
  });
};

export const getUserById = (req, res, next) => {
  User.find({ _id: req.params.id })
    .then((user) => {
      if (user.length === 0) {
        res.status(404).json({ message: "User doesn't exists." });
      } else {
        res.status(200).json({ user: user });
      }
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const updateUserById = (req, res, next) => {
  User.findOneAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error updating." });
    });
};

export const deleteUserById = (req, res, next) => {
  User.findOneAndRemove({ _id: req.params.id })
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error deleting." });
    });
};
