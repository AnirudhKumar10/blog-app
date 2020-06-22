import express from "express";
import {
  getAllBlogs,
  addBlog,
  getBlogById,
  getBlogByUserId,
  getAllBlogByUserId,
  updateBlogById,
  updateBlogByUserId,
  deleteBlogById,
  deleteBlogByUserId,
} from "../controllers/blogs";
import { checkAuth } from "../middlewares/check-auth";

const route = express.Router();

route.get("/", getAllBlogs);

route.post("/", checkAuth, addBlog);

route.get("/:id", getBlogById);

route.get("/user/:id", checkAuth, getBlogByUserId);

route.get("/user/all/:id", checkAuth, getAllBlogByUserId);

route.put("/update/:id", checkAuth, updateBlogById);

route.put("/update/user/:id", checkAuth, updateBlogByUserId);

route.delete("/delete/:id", checkAuth, deleteBlogById);

route.delete("/delete/user/:id", checkAuth, deleteBlogByUserId);

export default route;
