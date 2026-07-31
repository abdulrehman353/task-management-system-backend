const express = require('express');
const router = express.Router();
const orgController = require('../controllers/orgController');
const upload = require('../middleware/upload');

// Organization Endpoints
router.post('/', upload.single('logo'), orgController.createOrganization);
router.put('/:id', upload.single('logo'), orgController.updateOrganization);
router.delete('/:id', orgController.deleteOrganization);

// Assign User to Org
router.post('/:id/members', orgController.assignUserToOrg);

module.exports = router;