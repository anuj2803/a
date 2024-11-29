# TweetNest

TweetNest is a social media platform where users can create, share, and interact with posts. It provides functionalities for user authentication, post management, and notification handling. This project demonstrates a full-stack web application built with the MERN stack.

## Features

### Frontend
- **Authentication**: Login and signup forms with validation.
- **Post Management**: Create, view, and interact with posts.
- **Notifications**: Real-time updates for user interactions.
- **Responsive Design**: Optimized for desktop and mobile views.

### Backend
- **RESTful API**: Handles authentication, posts, users, and notifications.
- **MongoDB**: Efficient data storage and retrieval.
- **JWT Authentication**: Secure login with token-based authorization.

## Tech Stack

### Frontend
- **React.js** (with Vite for development)
- **Tailwind CSS** for styling
- **Axios** for API calls

### Backend
- **Node.js** with **Express**
- **MongoDB** for database
- **Mongoose** for schema modeling
- **JWT** for authentication

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB instance running locally or in the cloud
- Git installed on your system

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
npm install
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
npm start
cd frontend
npm install
npm run dev


backend/
├── controllers/         # Business logic
├── db/                  # Database connection
├── lib/                 # Utility functions
├── middleware/          # Middleware functions
├── models/              # MongoDB schemas
├── routes/              # API routes
└── server.js            # Entry point

frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Pages for routes
│   ├── utils/           # Utility functions
│   └── App.jsx          # Main React app
└── index.html           # Entry HTML file
