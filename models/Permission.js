const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Permission = sequelize.define('Permission', {
  PermissionID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  PermissionName: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Permission;