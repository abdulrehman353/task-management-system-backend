const express = require('express');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Database connection verify karna
    await sequelize.authenticate();
    console.log('✅ MySQL Database Connected Successfully!');

    // Saare tables aur foreign keys auto-create karna
    await sequelize.sync({ alter: true });
    console.log('✅ All Tables Migrated & Created Successfully!');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Database Connection Error:', error);
  }
}

startServer();