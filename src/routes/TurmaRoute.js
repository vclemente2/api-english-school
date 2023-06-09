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
    this.route.post(
      '/',
      BodyValidation.validate(createTurmaSchema),
      TurmaController.create
    );
    this.route.get('/', TurmaController.findAll);
    this.route.put(
      '/:id',
      BodyValidation.validate(updateTurmaSchema),
      TurmaController.update
    );
    this.route.delete('/:id', TurmaController.destroy);
  }

  getRoute() {
    return this.route;
  }
}

module.exports = TurmaRoute;
