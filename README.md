# JWT-Authentication
![jwt](https://github.com/prajwalmandlik2004/JWT-Authentication/assets/99119449/b58e010b-ee7b-45d6-89a1-be9970419bb7)
# Node.js JWT Authentication Project

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Introduction
This Node.js JWT Authentication Project is a secure and scalable solution for authenticating users using JSON Web Tokens (JWT). It provides a robust foundation for building secure web applications, APIs, and more. The project is implemented in Node.js and uses [Express](https://expressjs.com/) for the server and [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) for JWT generation and verification.

## Features
- User registration and login with JWT authentication.
- Password hashing and salting for security.
- Middleware for route protection.
- Scalable and easily extendable architecture.
- Well-documented code for easy customization.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed. You can download them [here](https://nodejs.org/).
- MongoDB installed and running. Download MongoDB [here](https://www.mongodb.com/try/download/community).

## Installation
1. Clone this repository:
```bash
git clone https://github.com/your-username/your-nodejs-jwt-authentication-project.git
cd your-nodejs-jwt-authentication-project
```
   
1. Install dependencies :
```bash
npm install
```

2. Create a .env file in the project root and configure the following environment variables :
```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database
JWT_SECRET=your-secret-key
```

3. Start Server :
```bash
npm start
```

