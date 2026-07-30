const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  RoleID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  RoleName: { type: DataTypes.STRING, allowNull: false },
  Description: { type: DataTypes.TEXT }
});

module.exports = Role;