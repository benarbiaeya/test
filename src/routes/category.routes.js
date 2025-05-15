const express = require('express');
const router = express.Router();
const controller = require('../controllers/category.controller.js');

router.post('/', controller.createCategory);
router.get('/', controller.getAllCategories);
router.get('/:id', controller.getCategoryById);
router.put('/:id', controller.updateCategory);
router.delete('/:id', controller.deleteCategory);

module.exports = router;