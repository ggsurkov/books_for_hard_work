const express = require("express");
const multer = require('multer');

const CollectionModel = require("../models/collection-model");
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
  const collection = new CollectionModel({
    title: req.body.title,
    description: req.body.description,
    vote: req.body.vote,
    imagePath: url + "/images/" + req.body.image,
    books: req.body.books,
  });
  collection.save().then(createdCollection => {
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
});

router.put("/:guid", (req, res, next) => {
  const collection = new CollectionModel({
    _id: req.body.guid,
    title: req.body.title,
    description: req.body.description,
    vote: req.body.vote,
    imagePath: req.body.imagePath,
    books: req.body.books,
  });
  CollectionModel.updateOne({_id: req.params.guid}, collection).then(result => {
    CollectionModel.find().then(collections => {
      let plainCollections = collections.map(collection =>
        ({
          guid: collection._id,
          title: collection.title,
          author: collection.author
        }));
      res.status(200).json({plainCollections})
    });
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

router.get("/all-full", (req, res, next) => {
  CollectionModel.find().then(collections => {
    res.status(200).json({
      collections,
    });
  });
});

router.get("/:guid", (req, res, next) => {
  CollectionModel.findById(req.params.guid).then(collection => {
    if (collection) {
      collection.guid = collection._id;
      res.status(200).json(collection);
    } else {
      res.status(404).json({message: "Collection not found!"});
    }
  });
});

router.delete("/delete/:guid", (req, res, next) => {
  CollectionModel.deleteOne({_id: req.params.guid}).then(result => {
    CollectionModel.find().then(collections => {
      let plainCollections = collections.map(collection =>
        ({
          guid: collection._id,
          title: collection.title,
          author: collection.author
        }));
      res.status(200).json({
        message: "Collection deleted!",
        plainCollections,
      });
    });
  });
});

module.exports = router;
