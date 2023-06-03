require('dotenv').config();
const App = require('./App');

const app = new App().getApp();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
