const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ActivityHistory = sequelize.define('ActivityHistory', {
  ActivityHistoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Action: { type: DataTypes.STRING },
  entity_type: { type: DataTypes.STRING },
  entity_ID: { type: DataTypes.INTEGER }
});

module.exports = ActivityHistory;