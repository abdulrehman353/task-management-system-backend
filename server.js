const express = require('express');
const path = require('path');
require('dotenv').config();

const { sequelize } = require('./models');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const orgRoutes = require('./routes/orgRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Uploaded Files (Logos) statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes Integration
app.use('/api/auth', authRoutes);
app.use('/api/orgs', orgRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ MySQL Database Connected & Synced Successfully!');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database Connection Error:', err);
  });