const { register, login } = require('../utils/utils');
const User = require('../models/user.models');
const {
  registerValidations,
  loginValidations,
} = require('../validations/auth.validations');

exports.registerController = async (req, res) => {
  const { email } = req.body;
  await register(req, res, User, registerValidations, { email });
};
exports.registerSellerController = async (req, res) => {
  const { email } = req.body;
  await register(req, res, User, registerValidations, { email }, 'Admin');
};
exports.loginController = async (req, res) => {
  const { email } = req.body;
  await login(req, res, User, loginValidations, { email });
};
exports.logoutController = (req, res) =>
  res.clearCookie('_token').json({ user: {}, isAuthenticated: false });
