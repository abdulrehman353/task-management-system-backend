const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
  ProjectID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Name: { type: DataTypes.STRING, allowNull: false },
  Description: { type: DataTypes.TEXT },
  StartDate: { type: DataTypes.DATEONLY },
  EndDate: { type: DataTypes.DATEONLY }
});

module.exports = Project;