const express = require('express');

const articleRoutes = express.Router();
const {
  addController,
  getAllController,
  getOneController,
  deleteOneController,
  updateOneController,
  deletAllController,
  getUserArticles,
} = require('../controllers/Article.controllers');
const { upload } = require('../middlewares/filehelper');

articleRoutes.get('/', getAllController);

articleRoutes.get('/:_id', getUserArticles);

articleRoutes.delete('/', deletAllController);

articleRoutes.post('/add', upload.array('images', 5), addController);

articleRoutes.get('/one/:_id', getOneController);

articleRoutes.delete('/:_id', deleteOneController);

articleRoutes.put('/:_id', upload.array('images', 5), updateOneController);

module.exports = articleRoutes;
