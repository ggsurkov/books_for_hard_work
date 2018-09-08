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


router.post("/new", multer({storage: storage}).single("image"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  debugger;
  const book = new BookModel({
    guid: req.body.guid,
    title: req.body.title,
    author: req.body.author,
    imagePath: url + "/images/" + req.body.image.name,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    vote: req.body.vote,
    youtubeReviewVideoCodes: req.body.youtubeReviewVideoCodes,
    bookCollection: req.body.bookCollection,
    refShopButtons: req.body.refShopButtons,
  });
  book.save().then(createdBook => {
    let plainBook = createdBook.map(book =>
      ({
        guid: book._id,
        title: book.title,
        author: book.author
      }));
    res.status(201).json({
      message: "Post added successfully",
      guid: createdBook._id,
      plainBook: plainBook
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
  BookModel.updateOne({_id: req.params.guid}, book).then(result => {
    res.status(200).json({message: "Update successful!"});
  });
});

router.get("/all", (req, res, next) => {
  BookModel.find().then(books => {
    let plainBooks = books.map(book =>
      ({
        guid: book.guid,
        title: book.title,
        author: book.author
      }));
    res.status(200).json({
      plainBooks: plainBooks,
    });
  });
});

router.get("/:guid", (req, res, next) => {
  BookModel.findById(req.params.guid).then(book => {
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({message: "Book not found!"});
    }
  });
});

router.delete("/:guid", (req, res, next) => {
  BookModel.deleteOne({_id: req.params.guid}).then(result => {
    console.log(result);
    res.status(200).json({message: "Book deleted!"});
  });
});

module.exports = router;
