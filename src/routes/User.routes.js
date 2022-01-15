const express = require('express');

const authRoutes = express.Router();
const {
  sellersNotValide,
  validateSellerAccount,
  deleteSellerAccount
} = require('../controllers/User.controller');

authRoutes.get('/sellers-not-valide', sellersNotValide);
authRoutes.put('/sellers-not-valide/:_id', validateSellerAccount);
authRoutes.delete('/sellers-not-valide/:_id', deleteSellerAccount);

module.exports = authRoutes;
