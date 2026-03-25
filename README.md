# Vision Go 🚀

**Vision Go**, a full-stack career guidance and progress tracking platform.

---

## ⚙️ Tech Stack

### Frontend

- React.js (Vite)
- React Router DOM
- Context API (Global Auth State)
- Tailwind CSS
- Lucide Icons

### Backend

- Node.js
- Express.js
- MongoDB

---

## 🔐 Features

- 🔐 Authentication system (JWT-based)
- 🧠 Auto-login & session persistence
- 🛡️ Protected routes
- 🧩 Clean architecture using React Context
- 📊 Scalable backend with REST APIs

---

## 📁 Project Structure

```
VisionGo/
├── client/ # React Frontend (Vite)
│ ├── components/
│ ├── context/
│ ├── hooks/
│ ├── pages/
│ └── ...
│
├── server/ # Express Backend
│ ├── config/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── server.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/jasnoorpal/VisionGo.git

cd VisionGo

---

### 2. Setup Backend

cd server

npm install

Create `.env` file:

PORT=8080

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Run server:

npm run dev

---

### 3. Setup Frontend

cd client

npm install

npm run dev

---

## 📡 API Endpoints

### 🔐 Auth Routes

- `POST /api/auth/signup` → Register user
- `POST /api/auth/login` → Login user
- `GET /api/auth` → Verify user (Protected)

---

## 🔄 App Flow

User Login/Signup
↓
Token stored (localStorage)
↓
AuthContext manages state
↓
Auto-login on reload
↓
Protected Routes → Dashboard

---

## 🧠 Future Plans

- Career recommendation engine
- Progress tracking system
- Admin dashboard
- Role-based authentication
- UI/UX improvements

---

## 🤝 Contributing

This project is currently under development. Contributions and suggestions are welcome.

---

## 👨‍💻 Author

Jasnoor Pal Singh -
"Learning to create, creating to inspire"
