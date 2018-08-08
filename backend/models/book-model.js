const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  guid: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  img: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  vote: { type: Number, required: false },
  // youtubeReviewVideoCodes: Array[String],
  // bookCollection: CollectionModel[],
  // refShopButtons: RefInfoButtonModel[],

});

module.exports = mongoose.model('BookModel', bookSchema);
