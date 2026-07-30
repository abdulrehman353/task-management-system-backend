const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('Comment', {
  CommentID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Comment: { type: DataTypes.TEXT, allowNull: false },
  CreatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  timestamps: false // Ye duplicate createdAt error ko khatam kar dega
});

module.exports = Comment;