const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');
const BodyValidation = require('../middlewares/BodyValidationMiddleware');
const {
  createTurmaSchema,
  updateTurmaSchema
} = require('../schema/turmaSchema');

class TurmaRoute {
  constructor() {
    this.route = Router();
    this.route
      .post(
        '/',
        BodyValidation.validate(createTurmaSchema),
        TurmaController.create
      )

      .post('/:id/restore', TurmaController.restore)

      .get('/', TurmaController.findAll)

      .get('/:id', TurmaController.findOne)

      .put(
        '/:id',
        BodyValidation.validate(updateTurmaSchema),
        TurmaController.update
      )

      .delete('/:id', TurmaController.destroy);
  }

  getRoute() {
    return this.route;
  }
}

module.exports = TurmaRoute;
