const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  item: { type: String, required: true },
  productLine: { type: String, required: true},
  productImages: { type: Object, required: true },
  originalPrice: { type: Number, required: true },
  newestPrice: { type: Number, required: true },
  category: { type: String, required: true },
  keywords: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
