# 📚 Library Management System – Full Stack (MERN)

A full-stack web application for managing a digital library. Users can register, login, borrow books, and view borrowing history. Admins can add, delete, and manage books and users, as well as track borrowing activity.

---

## 🧩 Tech Stack

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** for authentication & authorization
- **Nodemailer** for OTP and password reset emails
- Other libs: bcrypt, cloudinary, cookie-parser, cors, express-fileupload, node-cron, dotenv, nodemon

### Frontend
- **React 18** with Hooks and Context API
- **Vite** as build tool
- **React Router DOM** for client-side routing
- **Redux Toolkit** for state management
- **Axios** for HTTP requests
- UI libraries: Tailwind CSS, React Icons, React Toastify
- Charts with Chart.js and react-chartjs-2

---

## 🔐 Features

### Authentication & User Management
- User registration with email OTP verification
- Secure login/logout with JWT tokens
- Password reset via email token
- Password update for authenticated users
- Role-based access: Users & Admins
- Admin can promote users to admin

### Library Management
- Admin can add/delete books
- Users can browse all books
- Users can borrow books and view their borrowed list
- Admin can view all borrowed books and mark them returned
- Book borrowing records tracked and managed

---

## 🔧 Installation & Setup
1. **Clone the repository**
```bash
https://github.com/khanasifhere/Library_management_system.git
```
2. **Navigate to the project directory**
```bash
cd Library_management_system
```
3. **Install dependencies**
```bash
npm install
```
4. **Configure environment variables**
Create a `.env` file in the root directory and add your environment variables as shown below:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
5. **Run the application**
```bash
npm run dev
```
The application will start at `http://localhost:3000`

## 🤝 Contributing
Contributions are welcome! Please fork this repository and submit a pull request for review.

## 📜 License
This project is licensed under the MIT License.

## 📧 Contact
If you have any questions or suggestions, feel free to reach out at `khanaasif1065@gmail.com`.
