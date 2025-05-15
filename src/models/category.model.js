const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
}, { collection: 'categories' });

module.exports = mongoose.model('Category', CategorySchema);