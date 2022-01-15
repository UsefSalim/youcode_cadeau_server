const express = require('express');

const authRoutes = express.Router();
const {
  registerController,
  registerSellerController,
  loginController,
  logoutController,
} = require('../controllers/auth.controllers');

authRoutes.post('/register', registerController);
authRoutes.post('/register/seller', registerSellerController);
authRoutes.post('/login', loginController);
authRoutes.get('/logout', logoutController);

module.exports = authRoutes;
