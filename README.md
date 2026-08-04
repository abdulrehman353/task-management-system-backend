Task Management Backend System
A high-performance, scalable RESTful Backend API built with Node.js, Express.js, Sequelize ORM, and MySQL featuring multi-tenant organization handling, fine-grained Role-Based Access Control (RBAC), and interactive Swagger documentation.

✨ Core Features
🔐 JWT Authentication & Secure Route Protection

👤 User Profile Management

🏢 Multi-Organization Isolation

👥 Assign / Remove Users from Organizations

👑 Transfer Organization Ownership

🛡️ Dynamic Roles & Permissions Creation (System Admin)

📊 Relational Database Architecture (Sequelize Associations)

📚 Interactive Swagger API Documentation

🌐 Cloudflare Tunnel Support

🛠 Tech Stack
Technology	Purpose
Node.js	Backend Runtime
Express.js	REST API Framework
Sequelize ORM	Database ORM
MySQL	Database Engine
JWT	Authentication Tokens
bcrypt	Password Hashing
Swagger	API Documentation
🏗 Architecture Flow
Client
│
▼
Routes (Express Router)
│
▼
Middlewares (JWT & RBAC Guards)
│
▼
Controllers (Business Logic)
│
▼
Sequelize ORM (Data Models & Associations)
│
▼
MySQL Database

📂 Project Structure
Task-Management-Backend
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── authController.js
│   ├── orgController.js
│   └── roleController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── rbacMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Organization.js
│   ├── Role.js
│   └── Permission.js
│
├── routes/
│   ├── authRoutes.js
│   ├── orgRoutes.js
│   └── adminRoutes.js
│
├── swagger/
│   └── swaggerConfig.js
│
├── server.js
├── package.json
└── .env

📦 Implemented Modules
Module	Operational Status
Authentication System	✅
User Profile	✅
Organization Management	✅
Member Allocation (Assign/Remove)	✅
Ownership Transfer Protocol	✅
Roles & Permissions Engine	✅
Swagger UI Playground	✅
🔑 Authorization & Headers
This API utilizes Bearer JSON Web Tokens (JWT) to secure endpoints. Include the token in your headers:

Authorization: Bearer YOUR_SECRET_JWT_TOKEN

Password hashing is handled securely using bcrypt before saving records to MySQL.

🚀 Getting Started
1. Clone Repository
git clone https://github.com/your-username/Task-Management-Backend.git

2. Navigate to Directory
cd Task-Management-Backend

3. Install Dependencies
npm install

4. Configure Environment Variables
Create a .env file in the root directory:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management_db
JWT_SECRET=your_jwt_secret

5. Start Application
npm start

📖 API Documentation
Local Swagger Endpoint
http://localhost:5000/api-docs

📌 Core System Requirements
Secure JWT Authentication Pipeline

Assign User to Organization(s)

Remove User from Organization

Safe Transfer of Organization Ownership

Admin-Driven Role Creation

Granular Permission Mapping

Sequelize ORM + MySQL Integration

Self-Hosted Swagger UI Documentation

👨‍💻 Project Overview
A robust multi-tenant backend architecture designed with Node.js, Express, Sequelize, and MySQL. Provides complete control over authentication, organization structures, ownership shifts, dynamic role creation by admins, and middleware-protected endpoints.