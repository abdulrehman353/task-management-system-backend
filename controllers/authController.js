const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Apne User model ka path check kar lein

exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // 1. User find karein
    const foundUser = await User.findOne({ where: { Email } });
    if (!foundUser) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    // 2. Secret Key setup
    const secretKey = process.env.JWT_SECRET || 'supersecretkey';

    // 3. Token Generate karein (foundUser variables use karein)
    const token = jwt.sign(
      { UserID: foundUser.UserID, Email: foundUser.Email },
      secretKey,
      { expiresIn: '24h' }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: foundUser
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};