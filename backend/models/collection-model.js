const mongoose = require('mongoose');
const BookModel = require("book-model");

const collectionSchema = mongoose.Schema({
  guid: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  vote: { type: Number, required: false },
  books: [BookModel],
});

module.exports = mongoose.model('CollectionModel', collectionSchema);
