# Vision Go 🚀

Backend for **Vision Go**, a full-stack career guidance and progress tracking platform.

---

## 📌 Overview

This repository currently contains the **backend (server)** of the Vision Go application.
It handles user authentication, validation, and API endpoints for managing user data.

Frontend (client) will be added soon.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Joi Validation

---

## 🔐 Features (Backend)

- User Signup & Login
- Password hashing using bcrypt
- JWT-based authentication
- Input validation using Joi
- Protected routes with middleware
- Structured API responses

---

## 📁 Project Structure

```
server/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── validations/
└── server.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/jasnoorpal/VisionGo.git
cd VisionGo/server
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```
npm run dev
```

---

## 📡 API Endpoints

### Auth Routes

- `POST /auth/register` → Register new user
- `POST /auth/login` → Login user

---

## 🧠 Future Plans

- Add frontend (React)
- Dashboard & protected routes
- Career tracking features
- Progress analytics

---

## 🤝 Contributing

This project is currently under development. Contributions and suggestions are welcome.

---

## 📌 Note

Frontend will be added in the `client/` folder soon.

---

## 👨‍💻 Author

Jasnoor Pal Singh
"Learning to create, creating to inspire"
