const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const BlogPosts = sequelize.define('BlogPost', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = BlogPosts;
