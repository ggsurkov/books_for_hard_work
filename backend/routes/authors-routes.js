const express = require("express");
const multer = require('multer');

const AuthorModel = require("../models/collection-model");
const router = express.Router();


// const MIME_TYPE_MAP = {
//   "image/png": "png",
//   "image/jpeg": "jpg",
//   "image/jpg": "jpg"
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const isValid = MIME_TYPE_MAP[file.mimetype];
//     let error = new Error("Invalid mime type");
//     if (isValid) {
//       error = null;
//     }
//     cb(error, "backend/images");
//   },
//   filename: (req, file, cb) => {
//     const name = file.originalname
//       .toLowerCase()
//       .split(" ")
//       .join("-");
//     const ext = MIME_TYPE_MAP[file.mimetype];
//     cb(null, name + "-" + Date.now() + "." + ext);
//   }
// });


router.post("/new", (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const author = new AuthorModel({
    title: req.body.title,
    description: req.body.description,
    vote: req.body.vote,
    imagePath: url + "/images/" + req.body.image,
    books: req.body.books,
  });
  author.save().then(createdAuthor => {
    res.status(200).json({
      message: "New author saved"
    });
  });
});

router.put("/:guid", (req, res, next) => {
  const author = new AuthorModel({
    _id: req.body.guid,
    title: req.body.title,
    books: req.body.books,
  });
  AuthorModel.updateOne({_id: req.params.guid}, author).then(result => {
    res.status(200).json({
      author: result
    })
  });
});

router.get("/all", (req, res, next) => {
  CollectionModel.find().then(collections => {
    let plainCollections = collections.map(collection =>
      ({
        guid: collection._id,
        title: collection.title,
        author: collection.author
      }));
    res.status(200).json({
      plainCollections,
    });
  });
});

router.get("/:guid", (req, res, next) => {
  AuthorModel.findById(req.params.guid).then(author => {
    if (author) {
      author.guid = author._id;
      res.status(200).json(author);
    } else {
      res.status(404).json({message: "author not found!"});
    }
  });
});

router.delete("/delete/:guid", (req, res, next) => {
  AuthorModel.deleteOne({_id: req.params.guid}).then(result => {
    AuthorModel.find().then(authors => {
      res.status(200).json({
        authors: authors,
      });
    });
  });
});

module.exports = router;
