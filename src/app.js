import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import userRoute from "./routes/users";
import blogRoute from "./routes/blogs";
import commentRoute from "./routes/comments";

import config from "./configs/database";

// CREATE APP
const app = express();
const port = process.env.PORT || 4000;

// CONNECT TO DATABASE
//mongoose.connect(config.localUrl, { useNewUrlParser: true });

mongoose.connect(config.remoteUrl, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Database Connection made Successfully.");
});
mongoose.connection.on("err", () => {
  console.log(err);
});

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/comments", commentRoute);

// INDEX ROUTES
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// SERVER STARTED
app.listen(port, () => {
  console.log(`Server started at : ${port}`);
});
