# User Authentication System

This project is a simple user authentication system with a React frontend and a Node.js/Express backend, using MongoDB for data storage.

## Project Structure

```
project-root/
│
├── backend/
│   ├── server.js
│   ├── db/
│   │   ├── dbConnection.js
│   │   └── user.js
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   └── App.css
```

## Backend

The backend is built with Node.js and Express, using MongoDB as the database.

### Setup

1. Ensure you have Node.js and MongoDB installed on your system.
2. Navigate to the `backend` directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the MongoDB service on your machine.
5. Run the server:
   ```
   node server.js
   ```

The server will start on port 8000.

### API Endpoints

- POST `/register`: Register a new user
- POST `/login`: Authenticate a user

## Frontend

The frontend is built with React and uses React Router for navigation.

### Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

The React app will start on `http://localhost:5173` by default.

## Features

- User registration
- User login
- Basic error handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
