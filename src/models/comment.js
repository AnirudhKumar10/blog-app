import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  comment: { type: String, required: true },
  blogId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export default mongoose.model("Comment", commentSchema, "comments");
