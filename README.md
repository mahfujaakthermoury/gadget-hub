# 🛒 GadgetHub

A modern and responsive tech product showcase application built with **Next.js (App Router)** and **Firebase Authentication**. Users can browse gadgets, search and filter products, view product details, and securely access protected pages to add and manage products.

---

## 🚀 Live Demo

**Live Website:** https://gadget-hub-bd.vercel.app

## 📂 GitHub Repository

**Repository:** https://github.com/mahfujaakthermoury/gadget-hub-bd

---

## 📖 Project Overview

GadgetHub is a simple inventory and product showcase application designed to demonstrate modern frontend development using Next.js. It includes authentication, protected routes, dynamic routing, search and filtering, responsive layouts, and local storage for managing products.

---

## ✨ Key Features

* Responsive and modern user interface
* Firebase Email & Password Authentication
* Optional Google Sign-In
* Protected Routes
* Dynamic Product Details Page
* Search Products by Title
* Filter Products by Category and Price
* Add New Products (Protected)
* Manage Products (Protected)
* Delete Products
* Smooth Animations with Framer Motion
* Mobile, Tablet, and Desktop Responsive

---

## 🛠️ Technologies Used

* Next.js (App Router)
* React
* Tailwind CSS
* Firebase Authentication
* Context API
* Framer Motion
* React Icons
* Sonner (Toast Notifications)
* Local Storage

---

## 📁 Project Structure

```text
src
│
├── app
│   ├── about
│   ├── items
│   │   ├── add
│   │   ├── manage
│   │   └── [id]
│   ├── login
│   ├── register
│   ├── layout.js
│   └── page.js
│
├── components
├── context
├── firebase
├── hooks
├── lib
└── utils
```

---

## 🗂️ Route Summary

| Route           | Description     | Access    |
| --------------- | --------------- | --------- |
| `/`             | Landing Page    | Public    |
| `/items`        | Browse Products | Public    |
| `/items/[id]`   | Product Details | Public    |
| `/about`        | About Page      | Public    |
| `/login`        | Login           | Public    |
| `/register`     | Register        | Public    |
| `/items/add`    | Add Product     | Protected |
| `/items/manage` | Manage Products | Protected |

---

## 🔐 Authentication

Firebase Authentication is used for:

* Email & Password Registration
* Email & Password Login
* Google Login (Optional)
* User Authentication State
* Protected Routes

---

## 📦 Installation & Setup

### Clone the repository

```bash
git clone https://github.com/mahfujaakthermoury/gadget-hub-bd.git
```

### Navigate to the project

```bash
cd gadget-hub-bd
```

### Install dependencies

```bash
npm install
```

### Create a `.env.local` file

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🎯 Future Improvements

* Backend Integration
* Product Editing
* Wishlist
* Shopping Cart
* Dark Mode
* Pagination
* Product Reviews
* Admin Dashboard

---

## 👩‍💻 Developer

**Mahfuja Akther**

* GitHub: https://github.com/mahfujaakthermoury
* Portfolio: https://mahfujaakther.netlify.app

---

## 📄 License

This project is created for learning purposes and academic assignment.
