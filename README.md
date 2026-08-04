# 🚀 Task Management System API

A scalable and production-style RESTful backend application built with **Node.js**, **Express.js**, **Sequelize ORM**, and **MySQL**. The system provides secure authentication, organization management, role-based access control, project and task management, interactive API documentation with Swagger, and public access through Cloudflare Tunnel.

---

# 📖 Overview

The **Task Management System API** is designed to simulate a real-world backend application where multiple organizations can securely manage users, projects, tasks, and permissions. The project follows a clean layered architecture, making it scalable, maintainable, and easy to extend with additional features.

---

# ✨ Features

## 🔐 Authentication
- User Signup
- User Login
- JWT Authentication
- Secure Password Hashing using bcrypt

## 🏢 Organization Management
- Create Organization
- Update Organization
- Delete Organization
- Upload Organization Logo
- Customize Organization Theme
- Transfer Organization Ownership

## 👥 User & Organization Management
- Assign Users to Organizations
- Remove Users from Organizations
- Support Multiple Organizations per User

## 🛡️ Roles & Permissions
- Create Roles
- Create Permissions
- Assign Permissions to Roles
- Role-Based Access Control (RBAC)
- Admin Role Management

## 📂 Project Management
- Create Projects
- Update Projects
- Delete Projects

## ✅ Task Management
- Create Tasks
- Update Tasks
- Delete Tasks
- Assign Tasks
- Track Task Status

## 💬 Collaboration
- Comments
- Attachments
- Activity History Tracking

## 📚 API Documentation
- Swagger UI Integration
- Interactive API Testing

## ☁️ Deployment
- Hosted on Local Machine
- Public Access using Cloudflare Tunnel

---

# 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | REST API Framework |
| Sequelize ORM | Object Relational Mapper (ORM) |
| MySQL | Relational Database |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Swagger | API Documentation |
| Cloudflare Tunnel | Public API Access |

---

# 🏗️ Project Architecture

```text
                Client
                   │
                   ▼
              Express Routes
                   │
                   ▼
              Controllers
                   │
                   ▼
                Services
                   │
                   ▼
             Repositories
                   │
                   ▼
            Sequelize ORM
                   │
                   ▼
             MySQL Database
```

---

# 📁 Project Structure

```text
task-management-system
│
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── repositories
│   ├── routes
│   ├── services
│   ├── validators
│   ├── utils
│   └── app.js
│
├── uploads
├── swagger
├── server.js
├── package.json
├── README.md
└── .env
```

> **Note:** The folder structure may vary slightly depending on project updates.

---

# 📦 API Modules

| Module | Status |
|---------|:------:|
| Authentication | ✅ |
| Users | ✅ |
| Organizations | ✅ |
| Organization Members | ✅ |
| Organization Ownership Transfer | ✅ |
| Roles | ✅ |
| Permissions | ✅ |
| Projects | ✅ |
| Tasks | ✅ |
| Comments | ✅ |
| Attachments | ✅ |
| Activity History | ✅ |
| Swagger Documentation | ✅ |

---

# 🔐 Authentication

All protected endpoints require a valid JWT token.

Example:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Passwords are securely hashed using **bcrypt** before being stored in the database.

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone <repository-url>
```

## 2️⃣ Navigate to the Project

```bash
cd task-management-system
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Configure Environment Variables

Create a `.env` file in the project root and configure the required variables.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database
DB_USER=root
DB_PASSWORD=your_password

JWT_SECRET=your_jwt_secret
```

## 5️⃣ Start the Development Server

```bash
npm run dev
```

or

```bash
node server.js
```

---

# 📚 Swagger API Documentation

After running the server, open:

```text
http://localhost:5000/api-docs
```

Swagger provides interactive documentation where you can test every available API endpoint directly from your browser.

---


# 🔒 Security Features

- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ Protected Routes
- ✅ Role-Based Access Control (RBAC)
- ✅ Permission-Based Authorization
- ✅ Input Validation
- ✅ Centralized Error Handling

---

# ⭐ Project Highlights

- RESTful API Architecture
- Layered Architecture (Routes → Controllers → Services → Repositories → Sequelize → MySQL)
- Secure Authentication & Authorization
- Multi-Organization Support
- Organization Logo & Theme Management
- Role & Permission System
- Project & Task Management
- Activity History Tracking
- Swagger API Documentation
- Cloudflare Tunnel Deployment
- Clean and Scalable Code Structure

---

# 🔮 Future Enhancements

- Email Verification
- Password Reset
- Notifications
- Docker Support
- Unit Testing
- Integration Testing
- CI/CD Pipeline

---

# 👨‍💻 Developer

**Rehman Mughal**

Backend Developer

---

# 📌 Project Summary

The **Task Management System API** is a modern backend application built using **Node.js**, **Express.js**, **Sequelize ORM**, and **MySQL**. It provides secure JWT authentication, organization management, user assignment, role-based access control, project and task management, activity tracking, Swagger API documentation, and Cloudflare deployment. The project follows a clean layered architecture to ensure scalability, maintainability, and production-ready development practices.