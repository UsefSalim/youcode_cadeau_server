const User = require('../models/user.models');

const { update, deleteOne } = require('../utils/utils');

exports.sellersNotValide = async (req, res) => {
  const {
    page = 1,
    limit = 20,
    orderBy = 'id',
    order = 'DESC',
    ...rest
  } = req.query;

  const data = await User.find({ role: 'Seller', ...rest })
    .populate('categorie')
    .limit(+limit)
    .sort({ [orderBy]: order === 'DESC' ? -1 : 1 })
    .skip((page - 1) * limit);
  const total = await User.find({ role: 'Seller', ...rest }).count();
  res.status(200).json({ data, total });
};
exports.validateSellerAccount = async (req, res) => {
  await update(req, res, User);
};
exports.deleteSellerAccount = async (req, res) => {
  await deleteOne(req, res, User);
};
