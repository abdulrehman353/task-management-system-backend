const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  TaskID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Title: { type: DataTypes.STRING, allowNull: false },
  Description: { type: DataTypes.TEXT },
  Status: { type: DataTypes.STRING },
  Priority: { type: DataTypes.STRING },
  DueDate: { type: DataTypes.DATE }
});

module.exports = Task;