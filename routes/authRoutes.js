const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup Route
router.post('/signup', (req, res, next) => {
  // #swagger.tags = ['Authentication']
  // #swagger.summary = 'Register a new user'
  authController.signup(req, res, next);
});

// Login Route
router.post('/login', (req, res, next) => {
  // #swagger.tags = ['Authentication']
  // #swagger.summary = 'User Login'
  authController.login(req, res, next);
});

module.exports = router;