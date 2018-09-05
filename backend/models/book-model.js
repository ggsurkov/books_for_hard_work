const mongoose = require('mongoose');
// const RefInfoButtonModel = require("ref-info-button-model");
// const CollectionModel = require("collection-model");

const bookSchema = mongoose.Schema({
  guid: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  img: { type: String },
  shortDescription: { type: String },
  description: { type: String },
  vote: { type: Number },
  youtubeReviewVideoCodes: [String],
  // bookCollection: [CollectionModel],
  // refShopButtons: [RefInfoButtonModel],

});

module.exports = mongoose.model('BookModel', bookSchema);
