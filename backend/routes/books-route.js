const express = require("express");

const BookModel = require("../models/book-model");

const router = express.Router();

router.post("", (req, res, next) => {
  const post = new BookModel({
    guid: req.body.guid,
    title: req.body.title,
    author: req.body.author,
    img: req.body.img,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    vote: req.body.vote,
    youtubeReviewVideoCodes: req.body.youtubeReviewVideoCodes,
    bookCollection: req.body.bookCollection,
    refShopButtons: req.body.refShopButtons,
  });
  post.save().then(createdBook => {
    res.status(201).json({
      message: "Post added successfully",
      guid: createdBook._id
    });
  });
});

router.put("/:guid", (req, res, next) => {
  const book = new BookModel({
    _id: req.body.guid,
    title: req.body.title,
    author: req.body.author,
    img: req.body.img,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    vote: req.body.vote,
    youtubeReviewVideoCodes: req.body.youtubeReviewVideoCodes,
    bookCollection: req.body.bookCollection,
    refShopButtons: req.body.refShopButtons,
  });
  Post.updateOne({ _id: req.params.guid }, book).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});

router.get("", (req, res, next) => {
  Post.find().then(books => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      books: books
    });
  });
});

router.get("/:guid", (req, res, next) => {
  Post.findById(req.params.guid).then(book => {
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

router.delete("/:guid", (req, res, next) => {
  Post.deleteOne({ _id: req.params.guid }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = router;
