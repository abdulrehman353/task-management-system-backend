const sequelize = require('../config/database');

// Import All Models
const Organization = require('./Organization');
const User = require('./User');
const Role = require('./Role');
const Permission = require('./Permission');
const OrganizationMember = require('./OrganizationMember');
const Project = require('./Project');
const ProjectMember = require('./ProjectMember');
const Task = require('./Task');
const Comment = require('./Comment');
const Attachment = require('./Attachment');
const ActivityHistory = require('./ActivityHistory');

// ==========================================
// 1. Organization & User (via OrganizationMember)
// ==========================================
Organization.belongsToMany(User, { through: OrganizationMember, foreignKey: 'OrganizationID' });
User.belongsToMany(Organization, { through: OrganizationMember, foreignKey: 'UserID' });

OrganizationMember.belongsTo(Organization, { foreignKey: 'OrganizationID' });
OrganizationMember.belongsTo(User, { foreignKey: 'UserID' });

// ==========================================
// 2. Project Relationships
// ==========================================
Organization.hasMany(Project, { foreignKey: 'OrganizationID', onDelete: 'CASCADE' });
Project.belongsTo(Organization, { foreignKey: 'OrganizationID' });

// Project & User (via ProjectMember)
Project.belongsToMany(User, { through: ProjectMember, foreignKey: 'ProjectID' });
User.belongsToMany(Project, { through: ProjectMember, foreignKey: 'UserID' });

ProjectMember.belongsTo(Project, { foreignKey: 'ProjectID' });
ProjectMember.belongsTo(User, { foreignKey: 'UserID' });

// ==========================================
// 3. Task Relationships
// ==========================================
Project.hasMany(Task, { foreignKey: 'ProjectID', onDelete: 'CASCADE' });
Task.belongsTo(Project, { foreignKey: 'ProjectID' });

User.hasMany(Task, { foreignKey: 'AssignedTo', as: 'AssignedTasks' });
Task.belongsTo(User, { foreignKey: 'AssignedTo', as: 'Assignee' });

User.hasMany(Task, { foreignKey: 'CreatedBy', as: 'CreatedTasks' });
Task.belongsTo(User, { foreignKey: 'CreatedBy', as: 'Creator' });

// ==========================================
// 4. Comments & Attachments
// ==========================================
Task.hasMany(Comment, { foreignKey: 'TaskID', onDelete: 'CASCADE' });
Comment.belongsTo(Task, { foreignKey: 'TaskID' });

User.hasMany(Comment, { foreignKey: 'UserID' });
Comment.belongsTo(User, { foreignKey: 'UserID' });

Task.hasMany(Attachment, { foreignKey: 'TaskID', onDelete: 'CASCADE' });
Attachment.belongsTo(Task, { foreignKey: 'TaskID' });

User.hasMany(Attachment, { foreignKey: 'UploadedBy' });
Attachment.belongsTo(User, { foreignKey: 'UploadedBy' });

// ==========================================
// 5. Activity History
// ==========================================
Task.hasMany(ActivityHistory, { foreignKey: 'TaskID', onDelete: 'CASCADE' });
ActivityHistory.belongsTo(Task, { foreignKey: 'TaskID' });

User.hasMany(ActivityHistory, { foreignKey: 'PerformedBy' });
ActivityHistory.belongsTo(User, { foreignKey: 'PerformedBy' });

// Export Models and Sequelize instance
module.exports = {
  sequelize,
  Organization,
  User,
  Role,
  Permission,
  OrganizationMember,
  Project,
  ProjectMember,
  Task,
  Comment,
  Attachment,
  ActivityHistory
};