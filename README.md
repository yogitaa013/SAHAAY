# Sahaay – Full-Stack Support Platform for the Transgender Community

Sahaay is a full-stack web application designed to help transgender and gender-diverse individuals in India find legal, healthcare, and social support resources more easily. The platform combines a React-based frontend, an Express.js backend, and a MongoDB database to provide a secure, accessible, and user-friendly experience.

This project is a strong example of a practical, real-world web application because it solves a meaningful problem: making support services easier to discover, especially for people who may need help quickly and privately.

---

## 1. Project Overview

Sahaay is built to allow users to:
- register and log in securely
- browse support resources
- filter resources by category and state
- bookmark useful resources for later
- open NGO or support organization websites directly
- read a simple guide in English and Hindi

The application focuses on accessibility, safety, and ease of use.

---

## 2. Why This Project Was Built

Many people in marginalized communities face difficulty finding trustworthy support services. Sahaay aims to bridge that gap by creating a centralized platform where users can discover legal, healthcare, and social resources without needing to search across multiple websites.

In an interview context, this project shows:
- empathy-driven product thinking
- real-world problem solving
- full-stack development ability
- secure authentication implementation
- responsive UI design

---

## 3. Main Features

### User Features
- Secure user registration
- Secure login using JWT authentication
- Protected routes for authenticated users
- Browse support resources on the dashboard
- Filter resources by category and state
- Bookmark resources locally for quick access
- Light/Dark theme toggle
- Simple multilingual guide page in English and Hindi

### Admin/Content Features
- Resource data can be stored and retrieved from MongoDB
- New resources can be added through the backend API

---

## 4. Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- CORS

### Deployment
- Firebase Hosting for frontend
- MongoDB Atlas for database

---

## 5. Architecture Overview

The application follows a client-server architecture:

```text
User -> React Frontend -> Express API -> MongoDB Database
                 ^                        |
                 |                        |
            JWT Token / Local Storage    Mongoose Models
```

### Frontend Responsibilities
- render pages and UI components
- collect user input from login/register forms
- send requests to the backend API
- store authentication token in localStorage
- manage routing and navigation

### Backend Responsibilities
- validate incoming requests
- authenticate users with JWT
- connect to MongoDB using Mongoose
- serve resource data and user data
- secure protected routes with middleware

### Database Responsibilities
- store user information
- store support resources such as title, description, category, state, contact, and link

---

## 6. Project Structure

```text
SAHAAY/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── resourceController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Resource.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── resourceRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── firebase.json
└── README.md
```

---

## 7. Frontend Explanation

The frontend is built with React and Vite.

### Main Pages
- Login page: allows users to sign in
- Register page: allows users to create an account
- Dashboard: displays resources and supports filtering/bookmarking
- About page: explains the mission of the platform
- How to Use page: gives guidance in English and Hindi

### Important Frontend Components
- Navbar: navigation and logout button
- Footer: common footer content
- ResourceCard: displays each resource in a reusable card format
- ThemeContext: manages light/dark mode

### Frontend Flow
1. User opens the app.
2. If not logged in, the user is redirected to the login page.
3. After successful login, a JWT token is saved in localStorage.
4. The app uses the token to access protected resources.
5. The dashboard fetches resource data from the backend and displays it.

---

## 8. Backend Explanation

The backend is built with Node.js and Express.js.

### Main Backend Files
- server.js: entry point that sets up Express, CORS, JSON parsing, MongoDB connection, and routes
- authController.js: handles registration and login logic
- resourceController.js: handles fetching and adding resources
- authMiddleware.js: verifies JWT tokens for protected routes
- authRoutes.js: exposes authentication endpoints
- resourceRoutes.js: exposes resource-related endpoints

### Models
- User model: stores user details such as name, email, and password
- Resource model: stores resource details such as title, description, category, state, contact, and link

### Backend Flow
1. The frontend sends credentials to the authentication API.
2. The backend checks whether the user exists.
3. Passwords are hashed using bcryptjs.
4. If authentication succeeds, a JWT token is generated.
5. The frontend later sends this token in the Authorization header.
6. The backend verifies the token before allowing protected requests.

---

## 9. Authentication Flow

Authentication is an important part of the project and is implemented as follows:

1. User registers with name, email, and password.
2. The backend checks for an existing user.
3. If the user does not exist, the password is hashed and stored.
4. On login, the backend compares the entered password with the stored hash.
5. If the credentials are correct, the server creates a JWT token.
6. The frontend stores the token and uses it in future requests.

This demonstrates a common real-world authentication pattern used in modern web apps.

---

## 10. API Endpoints

### Authentication Endpoints
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and return a JWT token |

### Resource Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/resources | Get all resources or filter by category/state |
| POST | /api/resources | Add a new resource (protected route) |

---

## 11. How the Application Works End-to-End

A typical user journey looks like this:

1. The user opens the website.
2. They register or log in.
3. After authentication, they land on the dashboard.
4. The dashboard loads support resources from the backend.
5. The user can filter by category or state.
6. They can bookmark resources and visit the related websites.
7. The app continues to provide a smooth browsing experience through React routing and shared UI components.

---

## 12. Setup Instructions

### Prerequisites
Make sure you have:
- Node.js installed
- npm installed
- MongoDB database access (MongoDB Atlas recommended)

### Backend Setup
```bash
cd backend
npm install
```

Create a .env file inside the backend folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:
```bash
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:
```text
http://localhost:5173
```

The backend will run on:
```text
http://localhost:5000
```

---

## 13. Environment Variables

The backend uses the following environment variables:
- PORT: server port
- MONGO_URI: MongoDB connection string
- JWT_SECRET: secret key used for JWT token generation

---

## 14. Deployment Notes

The frontend is configured for Firebase Hosting, and the project includes a Firebase configuration file in the frontend folder. The backend is designed to connect to MongoDB Atlas or any MongoDB instance using a connection string.

---

## 15. What I Learned from This Project

This project helped me practice:
- building a full-stack web application from scratch
- connecting frontend and backend services
- working with authentication and protected routes
- using MongoDB with Mongoose
- implementing routing and reusable UI components
- building a meaningful product with social impact

---

## 17. Future Improvements

Possible upgrades for the project include:
- adding search functionality
- adding user profiles and personalized dashboards
- allowing NGOs to submit resources directly
- adding admin tools for content management
- adding push notifications for urgent support
- improving UI/UX with better accessibility features

---

## 18. Conclusion

Sahaay is a meaningful full-stack project that demonstrates both technical implementation and social impact. It combines frontend development, backend development, database integration, authentication, and product thinking into one complete application.

It is a strong project to showcase in an interview because it reflects practical development skills and a clear understanding of how modern web applications are built.
