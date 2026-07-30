const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProjectMember = sequelize.define('ProjectMember', {
  ProjectMemberID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

module.exports = ProjectMember;