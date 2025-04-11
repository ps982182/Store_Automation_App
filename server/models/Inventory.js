const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  lastRestocked: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    required: true
  },
  minimumStock: {
    type: Number,
    required: true,
    default: 10
  },
  status: {
    type: String,
    enum: ['in-stock', 'low-stock', 'out-of-stock'],
    default: 'in-stock'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inventory', inventorySchema);