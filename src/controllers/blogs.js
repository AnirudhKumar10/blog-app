import Blog from "../models/blog";

export const getAllBlogs = (req, res, next) => {
  Blog.find({})
    .then((blogs) => {
      res.status(200).json({ blogs: blogs });
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const addBlog = (req, res, next) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.status(200).json({ message: "Blog created successfully." });
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const getBlogById = (req, res, next) => {
  Blog.find({ _id: req.params.id })
    .then((blog) => {
      if (blog.length === 0) {
        res.status(404).json({ message: "Blog doesn't exists." });
      } else {
        res.status(200).json({ blog: blog });
      }
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const updateBlogById = (req, res, next) => {
  User.findOneAndUpdate(req.params.id, req.body)
    .then((blog) => {
      res.status(200).json({ blog: blog });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error updating." });
    });
};

export const deleteBlogById = (req, res, next) => {
  User.findOneAndRemove(req.params.id)
    .then((blog) => {
      res.status(200).json({ blog: blog });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error deleting." });
    });
};

export const getBlogByUserId = (req, res, next) => {
  Blog.find({ _id: req.params.id })
    .then((blog) => {
      if (blog.length === 0) {
        res.status(404).json({ message: "Blog doesn't exists." });
      } else {
        res.status(200).json({ blog: blog });
      }
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const getAllBlogByUserId = (req, res, next) => {
  Blog.find({ userId: req.params.id })
    .then((blogs) => {
      if (blogs.length === 0) {
        res.status(404).json({ message: "Blog doesn't exists." });
      } else {
        res.status(200).json({ blogs: blogs });
      }
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const updateBlogByUserId = (req, res, next) => {
  Blog.findOneAndUpdate(
    { _id: req.params.id, userId: req.body.userId },
    req.body
  )
    .then((blog) => {
      res.status(200).json({ blog: blog });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error updating." });
    });
};

export const deleteBlogByUserId = (req, res, next) => {
  Blog.findOneAndRemove({ _id: req.params.id, userId: req.body.userId })
    .then((blog) => {
      res.status(200).json({ blog: blog });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error deleting." });
    });
};
