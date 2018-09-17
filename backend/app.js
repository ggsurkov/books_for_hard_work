const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/books-routes");
const collectionRoutes = require("./routes/collection-routes");

const app = express();

mongoose
  .connect(
    "mongodb+srv://ggsurkov:bvqOms3iphlogS53@cluster0-84chb.mongodb.net/db01?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});

//
// app.post("/api/books", (req, res, next) => {
//   const book = new BookModel({
//     guid: req.body.guid,
//     title: req.body.title,
//     author: req.body.author,
//     img: req.body.img,
//     shortDescription: req.body.shortDescription,
//     description: req.body.description,
//     vote: req.body.vote,
//     youtubeReviewVideoCodes: req.body.youtubeReviewVideoCodes,
//     // bookCollection: req.body.bookCollection,
//     // refShopButtons: req.body.refShopButtons,
//   });
//   book.save();
//   res.status(201).json({
//     message: "book added successfully",
//   });
//   // post.save().then(createdBook => {
//   //   res.status(201).json({
//   //     message: "Post added successfully",
//   //     guid: createdBook._id
//   //   });
//   // });
// });

app.use("/api/books", bookRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/authors", collectionRoutes);

module.exports = app;
