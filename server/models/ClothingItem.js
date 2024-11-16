const mongoose = require('mongoose');

const clothingItemSchema = new mongoose.Schema({
  type: { type: String, enum: ['top', 'bottom'] },
  image: { type: String },
  name: { type: String },
  description: { type: String }
});

const ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);

module.exports = ClothingItem;