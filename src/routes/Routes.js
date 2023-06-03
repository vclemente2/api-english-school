const { Router } = require('express');
const PessoaRoute = require('./PessoaRoute');

class Routes {
  constructor() {
    this.route = Router();
    this.route.use('/pessoa', new PessoaRoute().getRoute());
  }

  getRoute() {
    return this.route;
  }
}

module.exports = Routes;
