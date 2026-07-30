const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attachment = sequelize.define('Attachment', {
  AttachmentID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FileName: { type: DataTypes.STRING, allowNull: false },
  UploadDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Attachment;