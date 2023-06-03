const { Router } = require('express');
const PessoaRoute = require('./PessoaRoute');

class Routes {
  constructor() {
    this.route = Router();
    this.route.get('/', (_, res) => {
      return res.json({
        version: '1.0.0',
        description: 'API English School',
        author: 'Vinicius Bastos Clemente'
      });
    });
    this.route.use('/pessoa', new PessoaRoute().getRoute());
  }

  getRoute() {
    return this.route;
  }
}

module.exports = Routes;
