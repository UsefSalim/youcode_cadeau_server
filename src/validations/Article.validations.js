const Joi = require('joi');

exports.articleValidations = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(50),
  });

  return schema.validate(data);
};
