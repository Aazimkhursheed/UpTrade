# 📈 UpTrade – Full Stack MERN Trading Dashboard

UpTrade is a full-stack MERN application that simulates a modern stock trading platform.  
It allows users to manage holdings, place buy/sell orders, and visualize portfolio data through an interactive dashboard interface.

This project demonstrates practical implementation of REST APIs, MongoDB integration, and full-stack architecture using the MERN stack.

---

## 🚀 Tech Stack

### Frontend
- React.js
- React Router DOM
- Context API
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

### Tools & Utilities
- Git & GitHub
- Thunder Client (API Testing)
- Nodemon

---

## ✨ Features

- 📊 Interactive trading dashboard UI
- 💼 Portfolio & holdings management
- 🛒 Buy and sell order functionality
- 🔄 RESTful API integration
- 🗃 MongoDB database storage
- ⚡ Context API for global state handling
- 📈 Real-time UI updates after order placement

---

## 🏗 Project Structure

```
UpTrade/
│
├── backend/        → Express server & MongoDB models
├── dashboard/      → Trading dashboard interface
├── frontend/       → Landing website pages
└── README.md
```

---

## ⚙️ Installation & Setup Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Aazimkhursheed/UpTrade.git
cd UpTrade
```

---

## 🔹 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
MONGO_URL=mongodb://127.0.0.1:27017/uptrade
PORT=3002
```

Start backend server:

```bash
nodemon index.js
```

Server will run on:

```
http://localhost:3002
```

---

## 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 🔹 Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

---

## 📌 API Endpoints

| Method | Endpoint        | Description                  |
|--------|----------------|------------------------------|
| GET    | /allHoldings   | Fetch all holdings           |
| GET    | /allOrders     | Fetch all orders             |
| POST   | /newOrder      | Place new buy/sell order     |
| GET    | /addHoldings   | Seed sample holdings data    |

---

## 🧠 Architecture Overview

- Client-side built using React
- Backend REST API built using Express
- MongoDB used for persistent storage
- Mongoose used for schema modeling
- Axios used for HTTP communication
- Context API used for managing buy window state

---

## 🎯 Learning Outcomes

Through this project:

- Implemented complete MERN stack architecture
- Built RESTful APIs from scratch
- Connected MongoDB using Mongoose schemas
- Managed environment variables securely
- Handled state using React Context API
- Structured a scalable multi-folder project
- Managed version control using Git

---

## 👨‍💻 Author

**Aazim Khursheed**  
B.Tech CSE Student  
GitHub: https://github.com/Aazimkhursheed  

---

## 📄 License

This project is created for educational and portfolio purposes.
