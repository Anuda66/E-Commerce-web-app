# 🛒 E-Commerce Web App

This is a fully functional e-commerce web application built using **React**, **Node.js**, **Express**, and **MongoDB**. The platform allows users to browse products, add them to the cart, place orders, and manage their profiles. Admin users can manage products, categories, and orders.

## 🚀 Features

### 👥 User
- User authentication (Register / Login)
- Browse products by category
- Add to cart / remove from cart
- Place orders
- View order history
- Edit profile

### 🛠️ Admin
- Admin dashboard
- Add / edit / delete products
- Manage categories
- View all orders
- Manage users

## 🧰 Tech Stack

- **Frontend**: React, Bootstrap, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: Context API / useReducer (React)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anuda66/E-Commerce-web-app.git
   cd E-Commerce-web-app

2. **Install server dependencies:**
   ```bash
   cd backend
   npm install

3. **Install client dependencies:**
   ```bash
   cd ../frontend
   npm install
4. **Configure environment variables:**
   -Create a .env file in the backend folder and add:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
5. **Run the application:**
    -Start backend server:
    ```bash
    cd backend
    npm run dev
    ```
  - Start frontend:
    ```bash
    cd ../frontend
    npm start

## 📁 Project Structure

  ```bash
E-Commerce-web-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
└── README.md
```
## ✅ Future Improvements
- Payment gateway integration (Stripe/PayPal)

- Product reviews and ratings

- Wishlist feature

- Responsive design improvements

- Real-time order tracking

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📞 Contact
For any questions or suggestions, please contact the project maintainer:
- Anuda - [GitHub Profile](https://github.com/Anuda66)
- Email: anudaransara@gmail.com 
   
