# 🚗 ZentoCars - Full Stack Car Rental Platform

ZentoCars is a **full-stack car rental application** designed to make booking, managing, and exploring cars simple and efficient.  
It offers a sleek UI, responsive frontend, and a powerful Node.js backend — perfect for modern car rental businesses.

---

## 🖥️ Project Demo

### 🏁 Home Page
![ZentoCars Hero Section](https://github.com/upadhyayaniket29/ZentoCars-fullstack/assets/fa5bea65-1844-4119-a3d7-da8b54f388c6.png)

### 🚘 Cars Listing
![Available Cars Section](https://github.com/upadhyayaniket29/ZentoCars-fullstack/assets/523a8177-f979-4fad-beb1-838af1478d22.png)

### 💬 Testimonials
![Customer Testimonials](https://github.com/upadhyayaniket29/ZentoCars-fullstack/assets/8b5b76a8-820c-493a-a440-950269c3a394.png)

---

## 📁 Folder Structure

```

ZentoCars-fullstack/
│
├── client/                    # Frontend (React + Vite)
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── favicon2.svg
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── assets/             # Images and static assets
│   │   ├── components/         # Reusable UI components
│   │   │   ├── owner/
│   │   │   │   ├── NavbarOwner.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Title.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── CarCard.jsx
│   │   │   ├── FeaturedSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── Testimonial.jsx
│   │   │   └── Title.jsx
│   │   │
│   │   ├── context/            # React Context API (if used)
│   │   ├── pages/              # Page-level components
│   │   │   ├── owner/
│   │   │   │   ├── CarDetails.jsx
│   │   │   │   ├── Cars.jsx
│   │   │   │   └── MyBookings.jsx
│   │   │   ├── Home.jsx
│   │   │   └── MyBookings.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json
│   └── .env
│
├── server/                    # Backend (Node.js + Express + MongoDB)
│   ├── configs/                # DB and environment configurations
│   ├── controllers/            # Business logic for routes
│   ├── middleware/             # Custom middleware
│   ├── models/                 # MongoDB Mongoose models
│   ├── routes/                 # Express routes
│   ├── server.js               # Main server entry point
│   ├── package.json
│   └── .env
│
├── .gitignore
├── README.md
└── vercel.json

````

---

## ⚙️ Tech Stack

**Frontend:**  
- React.js (Vite)  
- Tailwind CSS  
- React Router  
- Context API  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  

**Deployment:**  
- Vercel (Client)  
- Render / Vercel (Server)  

---

## 🚀 Setup Instructions

### 🧩 1. Clone the Repository
```bash
git clone https://github.com/upadhyayaniket29/ZentoCars-fullstack.git
cd ZentoCars-fullstack
````

### 🖥️ 2. Setup Client

```bash
cd client
npm install
npm run dev
```

Your frontend will start at `http://localhost:5173`

### ⚙️ 3. Setup Server

Open a new terminal:

```bash
cd server
npm install
npm run dev
```

Your backend will run at `http://localhost:5000`

---

## 🔑 Environment Variables

### In `client/.env`

```bash
VITE_API_URL=http://localhost:5000
```

### In `server/.env`

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

---

## 🌟 Features

✅ Modern, responsive UI
✅ Car browsing and filtering
✅ Booking management
✅ User authentication
✅ Admin/Owner dashboard
✅ Fully connected backend
✅ Fast, Vite-powered development

---

## 🧑‍💻 Developed By

**Aniket Upadhyay**
👨‍💻 *Full Stack Developer | Startup Enthusiast | UI/UX Focused Engineer*

---



> ⭐ Don’t forget to star the repo if you found it useful!
