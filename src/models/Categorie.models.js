const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const categorieSchema = Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('categorie', categorieSchema);
