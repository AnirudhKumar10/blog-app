import express from "express";
import {
  getAllComments,
  addComment,
  getCommentById,
  updateCommentById,
  getAllCommentByBlogId,
  updateCommentByUsersId,
  deleteCommentById,
  deleteCommentByUserId,
} from "../controllers/comments";
import { checkAuth } from "../middlewares/check-auth";

const route = express.Router();

route.get("/", getAllComments);

route.post("/", checkAuth, addComment);

route.get("/:id", getCommentById);

route.get("/blog/:id", getAllCommentByBlogId);

route.put("/update/:id", checkAuth, updateCommentById);

route.put("/update/user/:id", checkAuth, updateCommentByUsersId);

route.delete("/delete/:id", checkAuth, deleteCommentById);

route.delete("/delete/user/:id", checkAuth, deleteCommentByUserId);

export default route;
