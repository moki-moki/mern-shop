const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  inStock: {
    type: Number,
    required: true,
  },
  sale: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: String,
    enum: {
      values: ["bedroom", "kitchen", "tech", "coffee", "office"],
      message: "{VALUE} is not supported",
    },
    // enum: ['bedroom', 'kitchen', 'tech', 'coffee', office],
  },
});

module.exports = mongoose.model("Product", productSchema);
