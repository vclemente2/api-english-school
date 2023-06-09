const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const BodyValidation = require('../middlewares/BodyValidationMiddleware');
const {
  createPessoaSchema,
  updatePessoaSchema
} = require('../schema/pessoaSchema');
const { createMatriculaSchema } = require('../schema/matriculaSchema');

class PessoaRoute {
  constructor() {
    this.route = Router();
    this.route.post(
      '/:personId/matricula',
      BodyValidation.validate(createMatriculaSchema),
      PessoaController.createEnroll
    );
    this.route.get('/matricula', PessoaController.findAllEnrollments);
    this.route.get('/matricula/:enrollId', PessoaController.findOneEnroll);

    this.route.post(
      '/',
      BodyValidation.validate(createPessoaSchema),
      PessoaController.create
    );
    this.route.get('/', PessoaController.findAll);
    this.route.get('/:id', PessoaController.findOne);
    this.route.put(
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
