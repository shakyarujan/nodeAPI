const User = require('./User');

module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("Blog", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER(11),
            reference: {
                model: User,
                key: User.user_id,
            },
        },
        title: DataTypes.STRING(500),
        content: DataTypes.STRING(500),
    });

    Blog.associate = function (model) {
        //
    }
    return Blog;
};