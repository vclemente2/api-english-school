const joi = require('joi');

const pessoaSchema = joi.object({
  nome: joi
    .string()
    .pattern(/^[A-Za-zÀ-ÿ\s]+$/)
    .min(3)
    .required()
    .trim()
    .messages({
      'string.pattern.base':
        'The name field must be a text field and cannot contain numbers or special characters.'
    }),
  ativo: joi.boolean().default(true),
  email: joi.string().email().trim().required(),
  role: joi
    .string()
    .pattern(/^(estudante|docente)$/)
    .trim()
    .required()
    .messages({
      'string.pattern.base':
        'The role field should only contain the options "estudante" and "docente'
    })
});

module.exports = pessoaSchema;
