const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const BodyValidation = require('../middlewares/BodyValidationMiddleware');
const {
  createPessoaSchema,
  updatePessoaSchema
} = require('../schema/pessoaSchema');
const {
  createMatriculaSchema,
  updateMatriculaSchema
} = require('../schema/matriculaSchema');

class PessoaRoute {
  constructor() {
    this.route = Router();
    this.route
      .post(
        '/:personId/matricula',
        BodyValidation.validate(createMatriculaSchema),
        PessoaController.createEnroll
      )

      .post(
        '/:personId/matricula/:enrollId/restore',
        PessoaController.restoreEnroll
      )

      .get('/matricula', PessoaController.findAllEnrollments)

      .get('/:personId/matricula/:enrollId', PessoaController.findOneEnroll)

      .put(
        '/:personId/matricula/:enrollId',
        BodyValidation.validate(updateMatriculaSchema),
        PessoaController.updateEnroll
      )

      .delete('/:personId/matricula/:enrollId', PessoaController.destroyEnroll)

      .post(
        '/',
        BodyValidation.validate(createPessoaSchema),
        PessoaController.create
      )

      .post('/:id/restore', PessoaController.restore)

      .get('/all', PessoaController.findAll)

      .get('/', PessoaController.findAllActive)

      .get('/:id', PessoaController.findOne)

      .put(
        '/:id',
        BodyValidation.validate(updatePessoaSchema),
        PessoaController.update
      )

      .delete('/:id', PessoaController.destroy);
  }

  getRoute() {
    return this.route;
  }
}

module.exports = PessoaRoute;
