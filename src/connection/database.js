const { Sequelize } = require('sequelize');
const { development } = require('../config/databaseConfig');

console.log(development);
const connection = new Sequelize(development);

module.exports = connection;
