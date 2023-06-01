const express = require('express');
const cors = require('cors');

class App {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.get('/', (_, res) => {
      return res.json({ message: 'server is running' });
    });
  }

  getApp() {
    return this.app;
  }
}

module.exports = App;
