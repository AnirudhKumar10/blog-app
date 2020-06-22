import Comment from "../models/comment";

export const getAllComments = (req, res, next) => {
  Comment.find({})
    .then((comments) => {
      res.status(200).json({ comments: comments });
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const addComment = (req, res, next) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then((result) => {
      res.status(200).json({ message: "Comments created successfully." });
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const getCommentById = (req, res, next) => {
  Comment.find({ _id: req.params.id })
    .then((comment) => {
      if (comment.length === 0) {
        res.status(200).json({ message: "Comments doesn't exists." });
      } else {
        res.status(200).json({ comments: comments });
      }
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const getAllCommentByBlogId = (req, res, next) => {
  Comment.find({ blogId: req.params.id })
    .then((comments) => {
      if (comments.length === 0) {
        res.status(200).json({ message: "Comments doesn't exists." });
      } else {
        res.status(200).json({ comments: comments });
      }
    })
    .catch(() => {
      res.status(404).json({ message: "There was some error." });
    });
};

export const updateCommentById = (req, res, next) => {
  Comment.findOneAndUpdate(req.params.id, req.body)
    .then((blog) => {
      res.status(200).json({ comment: comment });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error updating." });
    });
};

export const updateCommentByUsersId = (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.id, userId: req.body.userId },
    req.body
  )
    .then((blog) => {
      res.status(200).json({ comment: comment });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error updating." });
    });
};

export const deleteCommentById = (req, res, next) => {
  Comment.findOneAndRemove({ _id: req.params.id })
    .then((comment) => {
      res.status(200).json({ comment: comment });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error deleting." });
    });
};

export const deleteCommentByUserId = (req, res, next) => {
  Comment.findOneAndRemove({ _id: req.params.id, userId: req.body.userId })
    .then((comment) => {
      res.status(200).json({ comment: comment });
    })
    .catch((err) => {
      res.status(404).json({ message: "There was error deleting." });
    });
};
