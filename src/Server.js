require('dotenv').config();

const App = require('./App');

class Server {
  constructor() {
    this.app = new App().getApp();
    this.port = process.env.PORT || 3000;

    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = new Server();
