const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const BodyValidation = require('../middlewares/BodyValidation');
const pessoaSchema = require('../schema/pessoaSchema');

class PessoaRoute {
  constructor() {
    this.route = Router();

    this.route.get('/', PessoaController.findAll);
    this.route.post(
      '/',
      BodyValidation.validate(pessoaSchema),
      PessoaController.create
    );
  }

  getRoute() {
    return this.route;
  }
}

module.exports = PessoaRoute;
