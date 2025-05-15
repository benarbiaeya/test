const service = require('../services/product.service');

exports.createProduct = async (req, res) => {
  try {
    const result = await service.createProduct(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const result = await service.getAllProducts();
  res.json(result);
};

exports.getProductById = async (req, res) => {
  const result = await service.getProductById(req.params.id);
  res.json(result);
};

exports.updateProduct = async (req, res) => {
  const result = await service.updateProduct(req.params.id, req.body);
  res.json(result);
};

exports.deleteProduct = async (req, res) => {
  await service.deleteProduct(req.params.id);
  res.json({ message: 'Deleted' });
};