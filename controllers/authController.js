const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 1. User Signup
exports.signup = async (req, res) => {
  try {
    const { Name, Email, Password, Date_of_birth } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ where: { Email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create User
    const user = await User.create({
      Name,
      Email,
      Password: hashedPassword,
      Date_of_birth
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: { UserID: user.UserID, Name: user.Name, Email: user.Email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// 2. User Login
exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await User.findOne({ where: { Email } });
    if (!user) {
      return res.status(404).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { UserID: user.UserID, Email: user.Email },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: { UserID: user.UserID, Name: user.Name, Email: user.Email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};