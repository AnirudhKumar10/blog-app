import express from "express";
import {
  login,
  register,
  getAllUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
} from "../controllers/users";

const route = express.Router();

route.post("/login", login);

route.post("/register", register);

route.get("/", getAllUsers);

route.post("/", addUser);

route.get("/:id", getUserById);

route.put("/update/:id", updateUserById);

route.delete("/delete/:id", deleteUserById);

export default route;
