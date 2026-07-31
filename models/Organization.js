const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Organization = sequelize.define('Organization', {
  OrganizationID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.STRING, allowNull: false },
  Email: { type: DataTypes.STRING },
  ContactNo: { type: DataTypes.STRING },
  Logo: { type: DataTypes.STRING, allowNull: true },
  Theme: { type: DataTypes.STRING, allowNull: true, defaultValue: '#ffffff' }
});

module.exports = Organization;