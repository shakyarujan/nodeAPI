const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }

});
    return User;
}