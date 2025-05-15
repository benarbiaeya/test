const Product = require('../models/product.model');
const Category = require('../models/category.model');

exports.createProduct = async (data) => {
  const category = await Category.findById(data.categoryId);
  if (!category) throw new Error('Category not found');
  return await new Product(data).save();
};

exports.getAllProducts = async () => {
  return await Product.find().populate('categoryId');
};

exports.getProductById = async (id) => {
  return await Product.findById(id);
};

exports.updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};