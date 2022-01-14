const Sequelize = require('sequelize');
const config = require('./config/pg');
const Users = require('./models/users.model');
const setLastSignIn = require('./services/setLastSignIn');

const sequelize = new Sequelize('postgres', config.user, config.pass, {
    host: config.host,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

try {
    sequelize.authenticate();
    console.log('Connection OK');
} catch (err) {
    console.error('Unable to connect to database', err);
}

const users = Users(sequelize);
setLastSignIn(sequelize, 'test@email.com');

module.exports = sequelize;