const mongoose = require('mongoose');
const RefInfoButtonModel = require('ref-info-button-model');
const CollectionModel = require('collection-model');

const bookSchema = mongoose.Schema({
  guid: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  img: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  vote: { type: Number, required: false },
  youtubeReviewVideoCodes: [String],
  bookCollection: [CollectionModel],
  refShopButtons: [RefInfoButtonModel],

});

module.exports = mongoose.model('BookModel', bookSchema);
