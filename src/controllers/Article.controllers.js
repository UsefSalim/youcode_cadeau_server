const xelor = require('xelor');
const Article = require('../models/Article.models');
const { ArticleValidations } = require('../validations/Article.validations');

exports.addController = async (req, res) => {
  await xelor.add(req, res, Article, ArticleValidations);
};
exports.getAllFromCategorieController = async (req, res) => {
  const { _id } = req.params;
  const {
    page = 1,
    limit = 20,
    orderBy = 'id',
    order = 'DESC',
    ...rest
  } = req.query;

  const data = await Article.find({ categorie: _id, ...rest })
    .populate('categorie')
    .limit(+limit)
    .sort({ [orderBy]: order === 'DESC' ? -1 : 1 })
    .skip((page - 1) * limit);
  const total = await Article.find({ categorie: _id, ...rest }).count();
  res.status(200).json({ data, total });
};

exports.getAllController = async (req, res) => {
  await xelor.getAll(res, Article);
};

exports.getOneController = async (req, res) => {
  const { _id } = req.params;
  await xelor.getOne(res, Article, { _id });
};

exports.deleteOneController = async (req, res) => {
  await xelor.deleteOne(req, res, Article);
};

exports.updateOneController = async (req, res) => {
  await xelor.update(req, res, Article, ArticleValidations);
};

exports.deletAllController = async (req, res) => {
  await xelor.deleteAll(res, Article);
};
