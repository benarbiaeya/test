const Category = require('../models/category.model.js');

exports.createCategory = async (data) => {
  return await new Category(data).save();
};

exports.getAllCategories = async () => {
  return await Category.find();
};

exports.getCategoryById = async (id) => {
  return await Category.findById(id);
};

exports.updateCategory = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};