# Smart E-Commerce Platform

A production-ready E-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes high-end visual aesthetics, complex global state management using Zustand, and advanced features such as Stripe payment intent injection, Chart.js admin dashboard analytics, and dynamic PDF invoice generation.

## Features

**Backend:**
- JWT authentication for User & Admin roles
- Full Product CRUD operations
- Cart and Order Lifecycle management
- Sales Analytics API (total revenue, monthly sales, top products pipeline)
- Recommendation Logic Endpoint
- Stripe Webhook & Payment Intent generation
- PDFKit dynamic Invoice Generator
- Clean MVC scalable architecture
- Global Error handling Middleware

**Frontend:**
- Vite & React 18 for lightning-fast HMR and build times
- Immersive Glassmorphism UI aesthetic using heavily curated Vanilla CSS
- Seamless routing using React Router DOM
- Centralized cart and auth state using Zustand
- Form controls & Input bindings
- Advanced Chart.js visuals for Admin dashboard
- Automated calculations (Tax, Shipping, Total)
- Stripe Elements Integration

## Project Structure

```text
smart-ecommerce/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Route controllers (userController, etc.)
│   │   ├── middleware/       # Error handling, Auth protection
│   │   ├── models/           # Mongoose Data models
│   │   ├── routes/           # Express Route definitions
│   │   ├── utils/            # DB connect, PDF Generator, Token utils
│   │   └── server.js         # Main express entrypoint
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable React components (Header, ProductCard)
│   │   ├── pages/            # View components (Home, Product, Cart, Admin)
│   │   ├── services/         # Axios wrapper & interceptor config
│   │   ├── store/            # Zustand global state (useStore.js)
│   │   ├── App.jsx           # Master route configuration
│   │   ├── main.jsx          # Entry DOM renderer
│   │   └── index.css         # Global aesthetics and variables
│   ├── index.html
│   ├── vite.config.js        # Vite config with backend Proxy
│   └── package.json
└── README.md
```

## Setup & Installation

### 1. Prerequisites
Ensure you have Node.js and MongoDB installed on your system.

### 2. Clone/Setup
Download or clone this repository. Note two sub-directories: `backend` and `frontend`.

### 3. Backend Setup
```bash
cd backend
npm install
```
Setup your `backend/.env` file. A sample has been predefined for you:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/smartecommerce
JWT_SECRET=yoursecret
JWT_EXPIRE=30d
STRIPE_SECRET_KEY=sk_test_... 
```

Run the backend development server:
```bash
npm run dev
```

### 4. Frontend Setup
```bash
cd frontend
npm install
```

Run the frontend development server:
```bash
npm run dev
```

### 5. Access the App
The React Vite app will run by default at `http://localhost:5173`.
The Express server will proxy API requests to `http://localhost:5000`.

## Notes
To trigger Stripe payments correctly, replace the test keys found in `OrderPage.jsx` and `paymentController.js` with your active Stripe test credentials from the Developer Dashboard.
