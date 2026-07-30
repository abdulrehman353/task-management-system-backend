const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrganizationMember = sequelize.define('OrganizationMember', {
  OrganizationMemberID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

module.exports = OrganizationMember;