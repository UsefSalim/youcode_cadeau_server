const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      ennum: ['User', 'Admin', 'Seller'],
      default: 'User',
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('user', userSchema);
