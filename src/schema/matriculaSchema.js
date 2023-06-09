const joi = require('joi');

const createMatriculaSchema = joi.object({
  status: joi.string().required(),
  turma_id: joi.number().integer().required()
});

const updateMatriculaSchema = joi.object({
  status: joi.string(),
  turma_id: joi.number().integer()
});

module.exports = { createMatriculaSchema, updateMatriculaSchema };
