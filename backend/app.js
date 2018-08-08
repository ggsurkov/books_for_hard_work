const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const BookModel = require("./models/book-model");

const app = express();

mongoose
  .connect(
    "mongodb+srv://ggsurkov:bvqOms3iphlogS53@cluster0-84chb.mongodb.net/test?retryWrites=true"
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
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
   const book = new BookModel({
    guid: req.body.guid,
    title: req.body.title,
    author: req.body.author,
    img: req.body.img,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    vote: req.body.vote,
  });
   console.log(book);

  // book.save().then(createdBook => {
  //   res.status(201).json({
  //     message: "Book added successfully",
  //     bookId: createdBook._id
  //   });
  // });
});

// app.get("/api/posts", (req, res, next) => {
//   const posts = [
//     {
//       id: "fadf12421l",
//       title: "First server-side post",
//       content: "This is coming from the server"
//     },
//     {
//       id: "ksajflaj132",
//       title: "Second server-side post",
//       content: "This is coming from the server!"
//     }
//   ];
//   res.status(200).json({
//     message: "Posts fetched successfully!",
//     posts: posts
//   });
// });

module.exports = app;
