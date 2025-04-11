const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createOrder,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');

router.post('/', auth, createOrder);
router.get('/', auth, getAllOrders);
router.patch('/:id/status', auth, updateOrderStatus);

module.exports = router;