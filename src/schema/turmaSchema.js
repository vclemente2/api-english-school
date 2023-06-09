const joi = require('joi');

const createTurmaSchema = joi.object({
  data_inicio: joi.date().required(),
  docente_id: joi.number().integer().required(),
  nivel_id: joi.number().integer().required()
});

const updateTurmaSchema = joi.object({
  data_inicio: joi.date(),
  docente_id: joi.number().integer(),
  nivel_id: joi.number().integer()
});

module.exports = { createTurmaSchema, updateTurmaSchema };
