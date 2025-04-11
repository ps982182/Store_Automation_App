const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  updateInventory,
  getInventoryStatus,
  getLowStockItems
} = require('../controllers/inventoryController');

router.put('/update', auth, updateInventory);
router.get('/status', auth, getInventoryStatus);
router.get('/low-stock', auth, getLowStockItems);

module.exports = router;