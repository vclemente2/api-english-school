const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const BodyValidation = require('../middlewares/BodyValidationMiddleware');
const {
  createPessoaSchema,
  updatePessoaSchema
} = require('../schema/pessoaSchema');

class PessoaRoute {
  constructor() {
    this.route = Router();

    this.route.get('/', PessoaController.findAll);
    this.route.get('/:id', PessoaController.findOne);
    this.route.post(
      '/',
      BodyValidation.validate(createPessoaSchema),
      PessoaController.create
    );
    this.route.patch(
      '/:id',
      BodyValidation.validate(updatePessoaSchema),
      PessoaController.update
    );
    this.route.delete('/:id', PessoaController.destroy);
  }

  getRoute() {
    return this.route;
  }
}

module.exports = PessoaRoute;
