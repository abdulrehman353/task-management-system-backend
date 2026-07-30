const sequelize = require('../config/database');

// Import Models
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

// 1. Organization & User
Organization.hasMany(User, { foreignKey: 'OrganizationID' });
User.belongsTo(Organization, { foreignKey: 'OrganizationID' });

// 2. Role & Permission
Role.hasMany(Permission, { foreignKey: 'RoleID' });
Permission.belongsTo(Role, { foreignKey: 'RoleID' });

// 3. Organization Members (Junction Table)
Organization.belongsToMany(User, { through: OrganizationMember, foreignKey: 'OrganizationID' });
User.belongsToMany(Organization, { through: OrganizationMember, foreignKey: 'UserID' });
OrganizationMember.belongsTo(Role, { foreignKey: 'RoleID' });

// 4. Projects
Organization.hasMany(Project, { foreignKey: 'OrganizationID' });
Project.belongsTo(Organization, { foreignKey: 'OrganizationID' });

User.hasMany(Project, { foreignKey: 'CreatedBy' });
Project.belongsTo(User, { foreignKey: 'CreatedBy', as: 'Creator' });

// 5. Project Members (Junction Table)
Project.belongsToMany(User, { through: ProjectMember, foreignKey: 'ProjectID' });
User.belongsToMany(Project, { through: ProjectMember, foreignKey: 'UserID' });

// 6. Tasks
Project.hasMany(Task, { foreignKey: 'ProjectID' });
Task.belongsTo(Project, { foreignKey: 'ProjectID' });

User.hasMany(Task, { foreignKey: 'CreatedBy', as: 'CreatedTasks' });
Task.belongsTo(User, { foreignKey: 'CreatedBy', as: 'TaskCreator' });

User.hasMany(Task, { foreignKey: 'AssignedTo', as: 'AssignedTasks' });
Task.belongsTo(User, { foreignKey: 'AssignedTo', as: 'Assignee' });

// 7. Comments
Task.hasMany(Comment, { foreignKey: 'TaskID' });
Comment.belongsTo(Task, { foreignKey: 'TaskID' });

User.hasMany(Comment, { foreignKey: 'UserID' });
Comment.belongsTo(User, { foreignKey: 'UserID' });

// 8. Attachments
Task.hasMany(Attachment, { foreignKey: 'TaskID' });
Attachment.belongsTo(Task, { foreignKey: 'TaskID' });

User.hasMany(Attachment, { foreignKey: 'UploadedBy' });
Attachment.belongsTo(User, { foreignKey: 'UploadedBy', as: 'Uploader' });

// 9. Activity History
Task.hasMany(ActivityHistory, { foreignKey: 'TaskID' });
ActivityHistory.belongsTo(Task, { foreignKey: 'TaskID' });

User.hasMany(ActivityHistory, { foreignKey: 'UserID' });
ActivityHistory.belongsTo(User, { foreignKey: 'UserID' });

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