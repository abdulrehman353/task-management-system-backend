const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const sequelize = require('./config/database');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const orgRoutes = require('./routes/orgRoutes');
const roleRoutes = require('./routes/roleRoutes'); // Added Role & Permission Routes

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Uploads Folder Static Files (Logos)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Swagger API Documentation Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Root Route (Full-Screen Developer Dashboard UI)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Task Management API Gateway</title>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          background-color: #090d16;
          color: #e2e8f0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        header {
          border-bottom: 1px solid #1e293b;
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #0f172a;
        }
        .logo { font-size: 18px; font-weight: 800; color: #38bdf8; letter-spacing: 0.5px; }
        .sys-status {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          padding: 6px 14px;
          border-radius: 6px;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 8px #10b981; }
        main {
          flex: 1;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          padding: 60px 20px;
        }
        .hero-tag {
          color: #6366f1;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        h1 { font-size: 42px; font-weight: 800; color: #ffffff; margin-bottom: 16px; line-height: 1.2; }
        .subtext { color: #94a3b8; font-size: 18px; max-width: 650px; line-height: 1.6; margin-bottom: 40px; }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        .metric-box {
          background: #0f172a;
          border: 1px solid #1e293b;
          padding: 20px;
          border-radius: 12px;
        }
        .metric-title { color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px; }
        .metric-value { font-family: 'Fira Code', monospace; font-size: 16px; font-weight: 600; color: #f1f5f9; }

        .actions { display: flex; gap: 16px; align-items: center; }
        .btn-primary {
          background: #38bdf8;
          color: #0f172a;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-primary:hover { background: #7dd3fc; transform: translateY(-2px); }
        
        footer {
          border-top: 1px solid #1e293b;
          text-align: center;
          padding: 20px;
          color: #475569;
          font-size: 13px;
        }
      </style>
    </head>
    <body>
      <header>
        <div class="logo">TASK-MANAGEMENT // API</div>
        <div class="sys-status"><span class="dot"></span> ONLINE</div>
      </header>

      <main>
        <div class="hero-tag">[SYSTEM GATEWAY v1.0]</div>
        <h1>Backend Services & Schema Specifications</h1>
        <p class="subtext">Core API server powering authentication, organizational structures, and workspace resources.</p>

        <div class="grid">
          <div class="metric-box">
            <div class="metric-title">ENVIRONMENT</div>
            <div class="metric-value">Development</div>
          </div>
          <div class="metric-box">
            <div class="metric-title">DATABASE ENGINE</div>
            <div class="metric-value">MySQL / Sequelize</div>
          </div>
          <div class="metric-box">
            <div class="metric-title">SWAGGER SPEC</div>
            <div class="metric-value">OpenAPI 2.0</div>
          </div>
          <div class="metric-box">
            <div class="metric-title">PORT</div>
            <div class="metric-value">5000</div>
          </div>
        </div>

        <div class="actions">
          <a href="/api-docs" class="btn-primary">Launch Swagger API Reference ↗</a>
        </div>
      </main>

      <footer>
        Task Management System • Backend Server Status
      </footer>
    </body>
    </html>
  `);
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/orgs', orgRoutes);
app.use('/api', roleRoutes); // Registered Roles & Permissions Routes Here

// Database Sync and Server Startup
const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log('MySQL Database Connected & Synced Successfully!');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });