const { Router } = require('express');
const BodyValidation = require('../middlewares/BodyValidationMiddleware');
const NivelController = require('../controllers/NivelController');
const { nivelSchema } = require('../schema/nivelSchema');

class NivelRoute {
  constructor() {
    this.route = Router();
    this.route.post(
      '/',
      BodyValidation.validate(nivelSchema),
      NivelController.create
    );
    this.route.get('/', NivelController.findAll);
    this.route.put(
      '/:id',
      BodyValidation.validate(nivelSchema),
      NivelController.update
    );
    this.route.delete('/:id', NivelController.destroy);
  }

  getRoute() {
    return this.route;
  }
}

module.exports = NivelRoute;
