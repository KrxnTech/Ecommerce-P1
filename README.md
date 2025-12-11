# Ecommerce Website

A full stack ecommerce application built with NodeJS Express MySQL and a modern frontend stack This project includes secure environment configuration API routing database integration and a responsive UI

---

## Features

### Core Functionality

* User registration and login
* Secure authentication flow
* Product listing and product detail pages
* Shopping cart
* Order placement system
* Admin control for product management

### Backend

* Built with NodeJS and Express
* MySQL used for storing all data
* MVC inspired folder structure
* Structured API routes for clean separation
* Error handling and validation planned for upcoming updates

### Frontend

* Responsive layout
* Clean UI and reusable components
* Home page completed
* About Us page completed
* Organized folders for HTML CSS and JS
* Smooth interaction with backend REST APIs

---

## Project Folder Structure

```
project root
│
├── backend
│   ├── config
│   │   └── dbConfig.env
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── css
│   ├── js
│   ├── assets
│   └── pages
│
└── readme.md
```

---

## Environment Setup

### Step 1 Create env File

Create a file named `.env` inside the backend config folder
Add sensitive data in it like

```
DB_HOST=your host
DB_USER=your user
DB_PASS=your password
DB_NAME=your database name
PORT=5000
```

### Step 2 Install Dependencies

```
npm install
```

### Step 3 Start the Backend Server

```
node server.js
```

The server loads environment values using dotenv and listens on the port defined inside the env file

---

## Database Setup

### Tables Used

* users
* products
* cart
* orders

Each table is connected using primary keys and foreign keys to maintain integrity

### Connecting MySQL

The backend connects to MySQL using host user password and database name provided in the env file

---

## API Structure

### Example Route

```
GET  /api/test-db  returns database connection status
```

### Other Planned API Endpoints

* User auth
* Product management
* Cart actions
* Order creation

---

## Frontend Notes

* HTML files inside pages
* CSS folder handles global and page level styling
* JS folder handles API calls dynamic UI and validation
* Navbar becomes responsive for smaller screens

---

## Future Enhancements

* JWT authentication
* Payment gateway
* Image uploading for products
* Better error handling
* Admin dashboard

---

## Screenshots

Add your images here

<img width="1882" height="742" alt="Screenshot 2025-12-11 171442" src="https://github.com/user-attachments/assets/23193848-9d94-4ca5-a07e-aeae04772573" />
<img width="1890" height="809" alt="Screenshot 2025-12-11 171521" src="https://github.com/user-attachments/assets/0487e69a-951e-4136-afa8-3cd3fdbafc5e" />

---

## Summary

This project delivers a full working ecommerce structure with backend database support and a polished frontend Home page and About Us page are completed The workflow is scalable easy to maintain and ready for new features

