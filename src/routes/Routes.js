const { Router } = require('express');
const PessoaRoute = require('./PessoaRoute');
const NivelRoute = require('./NivelRoute');

class Routes {
  constructor() {
    this.route = Router();
    this.route.get('/', (_, res) => {
      return res.json({
        version: '1.0.0',
        description: 'English School API',
        author: 'Vinicius Bastos Clemente'
      });
    });
    this.route.use('/pessoa', new PessoaRoute().getRoute());
    this.route.use('/nivel', new NivelRoute().getRoute());
  }

  getRoute() {
    return this.route;
  }
}

module.exports = Routes;
