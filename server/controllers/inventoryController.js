const Inventory = require('../models/Inventory');
const Product = require('../models/Product');

const updateInventory = async (req, res) => {
  try {
    const { productId, quantity, location, minimumStock } = req.body;
    
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let inventory = await Inventory.findOne({ product: productId });
    if (!inventory) {
      inventory = new Inventory({
        product: productId,
        quantity,
        location,
        minimumStock
      });
    } else {
      inventory.quantity = quantity;
      inventory.location = location || inventory.location;
      inventory.minimumStock = minimumStock || inventory.minimumStock;
      inventory.lastRestocked = new Date();
    }

    inventory.status = quantity === 0 ? 'out-of-stock' : 
                      quantity <= inventory.minimumStock ? 'low-stock' : 
                      'in-stock';

    await inventory.save();
    res.json(inventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getInventoryStatus = async (req, res) => {
  try {
    const inventory = await Inventory.find()
      .populate('product', 'name sku price')
      .sort({ status: 1 });
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLowStockItems = async (req, res) => {
  try {
    const lowStock = await Inventory.find({
      status: { $in: ['low-stock', 'out-of-stock'] }
    }).populate('product', 'name sku price');
    res.json(lowStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateInventory,
  getInventoryStatus,
  getLowStockItems
};