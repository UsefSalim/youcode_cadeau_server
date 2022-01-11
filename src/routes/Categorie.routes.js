const express = require('express');

const categorieRoutes = express.Router();
const {
  addController,
  getAllController,
  getOneController,
  deleteOneController,
  updateOneController,
  deletAllController,
} = require('../controllers/Categorie.controllers');

categorieRoutes.get('/', getAllController);
categorieRoutes.delete('/', deletAllController);
categorieRoutes.post('/add', addController);
categorieRoutes.get('/:_id', getOneController);
categorieRoutes.delete('/:_id', deleteOneController);
categorieRoutes.put('/:_id', updateOneController);

module.exports = categorieRoutes;
