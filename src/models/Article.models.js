const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const articleSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    prix: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    images: [Object],
    brand: {
      type: String,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    categorie: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'categorie',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('article', articleSchema);
