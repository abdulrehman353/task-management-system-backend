const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const verifyToken = require('../middleware/authMiddleware');

// Roles Endpoints
router.post('/roles', verifyToken, (req, res, next) => {
  // #swagger.tags = ['Role']
  // #swagger.summary = 'Create a new role (Admin only)'
  roleController.createRole(req, res, next);
});

router.get('/roles', verifyToken, (req, res, next) => {
  // #swagger.tags = ['Role']
  // #swagger.summary = 'Get all roles'
  roleController.getAllRoles(req, res, next);
});

// Permissions Endpoints
router.post('/permissions', verifyToken, (req, res, next) => {
  // #swagger.tags = ['Permissions']
  // #swagger.summary = 'Create a new permission (Admin only)'
  roleController.createPermission(req, res, next);
});

router.get('/permissions', verifyToken, (req, res, next) => {
  // #swagger.tags = ['Permissions']
  // #swagger.summary = 'Get all permissions'
  roleController.getAllPermissions(req, res, next);
});

module.exports = router;