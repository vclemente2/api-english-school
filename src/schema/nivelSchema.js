const joi = require('joi');

const nivelSchema = joi.object({
  descr_nivel: joi.string().required().trim()
});

module.exports = { nivelSchema };
