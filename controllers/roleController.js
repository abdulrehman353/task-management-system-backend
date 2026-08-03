const { Role, Permission } = require('../models');

// 1. Create a new Role
exports.createRole = async (req, res) => {
  try {
    const { RoleName, Description } = req.body;

    if (!RoleName) {
      return res.status(400).json({ message: 'RoleName is required.' });
    }

    const existingRole = await Role.findOne({ where: { RoleName } });
    if (existingRole) {
      return res.status(400).json({ message: 'Role already exists.' });
    }

    const role = await Role.create({ RoleName, Description });
    return res.status(201).json({ message: 'Role created successfully.', data: role });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating role', error: error.message });
  }
};

// 2. Get All Roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    return res.status(200).json({ data: roles });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching roles', error: error.message });
  }
};

// 3. Create a new Permission
exports.createPermission = async (req, res) => {
  try {
    const { PermissionName, RoleID } = req.body;

    if (!PermissionName) {
      return res.status(400).json({ message: 'PermissionName is required.' });
    }

    const permission = await Permission.create({
      PermissionName,
      RoleID: RoleID || null
    });

    return res.status(201).json({ message: 'Permission created successfully.', data: permission });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating permission', error: error.message });
  }
};

// 4. Get All Permissions
exports.getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.findAll();
    return res.status(200).json({ data: permissions });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching permissions', error: error.message });
  }
};