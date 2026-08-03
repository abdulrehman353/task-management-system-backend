const express = require('express');
const router = express.Router();
const orgController = require('../controllers/orgController');
const verifyToken = require('../middleware/authMiddleware');

// Assign User to Organization
router.post('/:id/members', verifyToken, (req, res, next) => {
  // #swagger.tags = ['Organization Members']
  // #swagger.summary = 'Assign a user to an organization'
  orgController.assignMember(req, res, next);
});

// Remove User from Organization
router.delete('/:id/members/:userId', verifyToken, (req, res, next) => {
  // #swagger.tags = ['Organization Members']
  // #swagger.summary = 'Remove a user from an organization'
  orgController.removeMember(req, res, next);
});

// Transfer Organization Ownership
router.put('/:id/transfer-owner', verifyToken, (req, res, next) => {
  // #swagger.tags = ['Organization']
  // #swagger.summary = 'Transfer organization ownership to another user'
  orgController.transferOwnership(req, res, next);
});

module.exports = router;