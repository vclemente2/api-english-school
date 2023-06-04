const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const BodyValidation = require('../middlewares/BodyValidationMiddleware');
const pessoaSchema = require('../schema/pessoaSchema');

class PessoaRoute {
  constructor() {
    this.route = Router();

    this.route.get('/', PessoaController.findAll);
    this.route.get('/:id', PessoaController.findOne);
    this.route.post(
      '/',
      BodyValidation.validate(pessoaSchema),
      PessoaController.create
    );
    this.route.put(
      '/:id',
      BodyValidation.validate(pessoaSchema),
      PessoaController.update
    );
    this.route.delete('/:id', PessoaController.destroy);
  }

  getRoute() {
    return this.route;
  }
}

module.exports = PessoaRoute;
