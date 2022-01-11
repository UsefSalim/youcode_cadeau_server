const express = require('express');

const articleRoutes = express.Router();
const {
  addController,
  getAllController,
  getOneController,
  deleteOneController,
  updateOneController,
  deletAllController,
  getAllFromCategorieController,
} = require('../controllers/Article.controllers');
const { upload } = require('../middlewares/filehelper');

articleRoutes.get('/', getAllController);
articleRoutes.get('/:_id', getAllFromCategorieController);
articleRoutes.delete('/', deletAllController);
articleRoutes.post('/add', upload.array('files', 4), addController);
articleRoutes.get('/one/:_id', getOneController);
articleRoutes.delete('/:_id', deleteOneController);
articleRoutes.put('/:_id', updateOneController);

module.exports = articleRoutes;
