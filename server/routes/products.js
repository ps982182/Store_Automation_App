const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.get('/', auth, getAllProducts);
router.post('/', auth, createProduct);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;