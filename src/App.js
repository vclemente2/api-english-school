const express = require('express');
const cors = require('cors');
const Routes = require('./routes/Routes');

class App {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.get('/', (_, res) => {
      return res.json({
        version: '1.0.0',
        description: 'API de Exemplo',
        author: 'Nome do Autor'
      });
    });
    this.app.use(new Routes().getRoute());
  }

  getApp() {
    return this.app;
  }
}

module.exports = App;
