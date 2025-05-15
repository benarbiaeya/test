const service = require('../services/category.service.js');


exports.createCategory = async (req, res) => {
  try {
    const result = await service.createCategory(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllCategories = async (req, res) => {
  const result = await service.getAllCategories();
  res.json(result);
};

exports.getCategoryById = async (req, res) => {
  const result = await service.getCategoryById(req.params.id);
  res.json(result);
};

exports.updateCategory = async (req, res) => {
  const result = await service.updateCategory(req.params.id, req.body);
  res.json(result);
};

exports.deleteCategory = async (req, res) => {
  await service.deleteCategory(req.params.id);
  res.json({ message: 'Deleted' });
};