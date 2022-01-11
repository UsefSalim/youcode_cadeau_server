const xelor = require('xelor');
const Categorie = require('../models/Categorie.models');
const {
  CategorieValidations,
} = require('../validations/Categorie.validations');

exports.addController = async (req, res) => {
  await xelor.add(req, res, Categorie, CategorieValidations);
};

exports.getAllController = async (req, res) => {
  const {
    page = 1,
    limit = 20,
    orderBy = 'id',
    order = 'DESC',
    ...rest
  } = req.query;

  const data = await Categorie.find({ ...rest })
    .limit(+limit)
    .sort({ [orderBy]: order === 'DESC' ? -1 : 1 })
    .skip((page - 1) * limit);
  const total = await Categorie.find({ ...rest }).count();
  res.status(200).json({ data, total });
};

exports.getOneController = async (req, res) => {
  const { _id } = req.params;
  await xelor.getOne(res, Categorie, { _id });
};

exports.deleteOneController = async (req, res) => {
  await xelor.deleteOne(req, res, Categorie);
};

exports.updateOneController = async (req, res) => {
  await xelor.update(req, res, Categorie, CategorieValidations);
};

exports.deletAllController = async (req, res) => {
  await xelor.deleteAll(res, Categorie);
};
