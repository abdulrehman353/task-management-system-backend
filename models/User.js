const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  UserID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.STRING, allowNull: false },
  Email: { type: DataTypes.STRING, allowNull: false, unique: true },
  Password: { type: DataTypes.STRING, allowNull: false },
  Date_of_birth: { type: DataTypes.DATEONLY }
});

module.exports = User;