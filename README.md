# Login - Signup Project using Node.js and Express.js

This repository contains a Node.js and Express.js project that provides a secure and fully-featured authentication system, including password hashing using bcrypt, JWT (JSON Web Token) authentication, cookie parsing, and complete authorization. The system also allows users to log out from all devices or a single device. This README file will guide you through the setup, features, and usage of the project.

![member-log-membership-username-password-concept](https://github.com/prajwalmandlik2004/JWT-Authentication/assets/99119449/34ce16b4-d781-421e-aa80-d90d723e9784)

## Features

1. **User Registration:** Allows users to sign up by providing a username and a password. Passwords are securely hashed using bcrypt before being stored in the database.

2. **User Login:** Registered users can log in by providing their username and password.

3. **JWT Authentication:** JSON Web Tokens are used to authenticate users after successful login. The JWT contains user information and is securely sent in an HTTP-only cookie to protect against cross-site scripting (XSS) attacks.

4. **Authorization:** Users are authenticated before accessing protected routes. The project includes middleware for ensuring only authorized users can access specific endpoints.

5. **Logout Functionality:**
   - **Logout from All Devices:** Users can log out from all devices, effectively invalidating their JWT token and requiring re-authentication on all devices.
   - **Logout from a Single Device:** Users can log out from a specific device while staying logged in on other devices.
  
# JWT-Authentication

![flow](https://github.com/prajwalmandlik2004/JWT-Authentication/assets/99119449/88aad617-8858-4fbc-8bd7-af4e99c3aaeb)

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/JWT-Authentication.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the project root and configure the following environment variables:
   - `PORT` - The port on which the server will run.
   - `SECRET_KEY` - Secret key for JWT token generation.
   - `CONNECTION_MONGO` - MongoDB connection URI.

4. **Database Setup:**
   Ensure you have MongoDB installed and running. Update the `CONNECTION_MONGO` in the `.env` file to point to your database.

5. **Start the Server:**
   ```bash
   npm start
   ```

## Usage

1. **Registration:** Access `/register` to create a new user account by providing a username and password.

2. **Login:** Access `/login` to log in with your registered account.

3. **Protected Routes:** Certain routes are protected and can only be accessed by authenticated users. The server will return a `401 Unauthorized` response if you attempt to access these routes without authentication.

4. **Logout:**
   - To log out from all devices, access `/logout`.

## API Endpoints

- `POST /register`: Register a new user.
- `POST /login`: Login with username and password to receive a JWT token.
- `POST /logout`: Log out from all device.

## Contributions

Contributions are welcome! If you want to contribute to this project, please follow the standard Git flow:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature`.
3. Commit and push your changes: `git commit -m "Add feature" && git push origin feature/your-feature`.
4. Create a pull request.
