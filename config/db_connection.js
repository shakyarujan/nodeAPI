const Sequelize = require('sequelize')
const config = require('./config.json');

const sequelize = new Sequelize(config.development.database, 'root', '', {
    host: '127.0.0.1',
    dialect: "mysql",
    operatorsAliases: "0"
}, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idel: 10000
    }
}, {
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        freezeTableName: true,
        underscored: true,
        timestamps: false
    }
});

global.sequelize = sequelize;
module.exports = sequelize;