const express = require("express");
const multer = require('multer');

const BookModel = require("../models/book-model");
const router = express.Router();


const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});


router.post("/new", (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const book = new BookModel({
    title: req.body.title,
    author: req.body.author,
    imagePath: url + "/images/" + req.body.image,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    vote: req.body.vote,
    youtubeReviewVideoCodes: req.body.youtubeReviewVideoCodes,
    bookCollection: req.body.bookCollection,
    refShopButtons: req.body.refShopButtons,
  });
  book.save().then(createdBook => {
    BookModel.find().then(books => {
      let plainBooks = books.map(book =>
        ({
          guid: book._id,
          title: book.title,
          author: book.author
        }));
      res.status(200).json({
        plainBooks,
      });
    });
  });
});

router.put("/:guid", (req, res, next) => {
  const book = new BookModel({
    _id: req.body.guid,
    title: req.body.title,
    author: req.body.author,
    imagePath: req.body.img,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    vote: req.body.vote,
    youtubeReviewVideoCodes: req.body.youtubeReviewVideoCodes,
    bookCollection: req.body.bookCollection,
    refShopButtons: req.body.refShopButtons,
  });
  BookModel.updateOne({_id: req.params.guid}, book).then(result => {
    BookModel.find().then(books => {
      let plainBooks = books.map(book =>
        ({
          guid: book._id,
          title: book.title,
          author: book.author
        }));
      res.status(200).json({plainBooks})
    });

  });
});

router.get("/all", (req, res, next) => {
  BookModel.find().then(books => {
    let plainBooks = books.map(book =>
      ({
        guid: book._id,
        title: book.title,
        author: book.author
      }));
    res.status(200).json({
      plainBooks,
    });
  });
});

router.get("/all-full", (req, res, next) => {
  BookModel.find().then(books => {
    res.status(200).json({
      books
    });
  });
});

router.get("/:guid", (req, res, next) => {
  BookModel.findById(req.params.guid).then(book => {
    if (book) {
      book.guid = book._id;
      res.status(200).json(book);
    } else {
      res.status(404).json({message: "Book not found!"});
    }
  });
});

router.get("/:author", (req, res, next) => {
  BookModel.findById(req.params.author).then(book => {
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({message: "Book not found!"});
    }
  });
});

router.delete("/delete/:guid", (req, res, next) => {
  BookModel.deleteOne({_id: req.params.guid}).then(result => {
    BookModel.find().then(books => {
      let plainBooks = books.map(book =>
        ({
          guid: book._id,
          title: book.title,
          author: book.author
        }));
      res.status(200).json({
        message: "Book deleted!",
        plainBooks,
      });
    });
  });
});

module.exports = router;
