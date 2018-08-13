const mongoose = require('mongoose');
const BookModel = require('book-model');

const authorSchema = mongoose.Schema({
  guid: {type: String, require: true},
  name: {type: String, require: true},
  books: [BookModel],
});

module.exports = mongoose.model('AuthorModel', authorSchema);
