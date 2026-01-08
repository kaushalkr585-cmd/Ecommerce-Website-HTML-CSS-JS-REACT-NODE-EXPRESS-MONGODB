# CLOTHSY – Full Stack E-Commerce Platform

<div align="center">

![CLOTHSY](https://img.shields.io/badge/CLOTHSY-E--Commerce-blue)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)

**A modern, scalable e-commerce solution built with the MERN stack**

[Features](#features) • [Architecture](#architecture) • [Installation](#installation) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Security](#security)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

CLOTHSY is a comprehensive full-stack e-commerce platform designed for modern online retail. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, it provides a complete solution for managing an online clothing store with separate interfaces for customers and administrators.

### Platform Screenshots

<div align="center">

#### Homepage & Hero Section
![Homepage](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/blob/main/screenshots/homepage.png)
*Modern landing page with new collections showcase*

#### Product Categories
![Men's Collection](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/blob/main/screenshots/mens-category.png)
*Men's category with advanced filtering options*

![Women's Collection](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/blob/main/screenshots/womens-category.png)
*Women's category with product grid layout*

#### New Collections
![New Collections](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/blob/main/screenshots/new-collections.png)
*Featured new arrivals section*

#### User Authentication
![Login Page](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/blob/main/screenshots/login.png)
*Secure login interface with modern design*

#### Shopping Cart
![Shopping Cart](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/blob/main/screenshots/cart.png)
*Interactive cart with quantity controls and promo code support*

#### Admin Dashboard
![Admin Panel](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/blob/main/screenshots/admin-panel.png)
*Product management dashboard with full CRUD operations*

#### Newsletter Section
![Newsletter](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/blob/main/screenshots/newsletter.png)
*Email subscription with gradient background*

</div>

### Project Components

| Component | Description | Technology |
|-----------|-------------|------------|
| **Frontend** | Customer-facing shopping interface | React.js + Context API |
| **Backend** | RESTful API and business logic | Node.js + Express.js |
| **Admin Panel** | Administrative dashboard | React.js + Vite |
| **Database** | Data persistence layer | MongoDB |

## Features

### 🛍️ Customer Features (Frontend)

#### Shopping Experience
- **Product Catalog**: Browse products by categories with filtering options
- **Product Details**: Comprehensive product information with high-quality images
- **Search Functionality**: Find products quickly and efficiently
- **Shopping Cart**: Add, remove, and manage cart items in real-time
- **Responsive Design**: Seamless experience across all devices

#### User Management
- **Authentication**: Secure login and registration system
- **User Profiles**: Personal account management
- **Session Management**: Persistent login with JWT tokens
- **Guest Checkout**: Shop without mandatory registration

### 🔧 Administrative Features (Admin Panel)

#### Product Management
- **Add Products**: Create new product listings with detailed information
- **Edit Products**: Update existing product details and inventory
- **Product Catalog**: View and manage all products in a centralized dashboard
- **Image Management**: Upload and manage product images
- **Inventory Tracking**: Monitor stock levels and availability

#### Store Operations
- **Dashboard Analytics**: Overview of key metrics and performance
- **Order Management**: Track and process customer orders
- **User Management**: View and manage registered users
- **Secure Access**: Role-based authentication for admin users

### ⚙️ Backend Capabilities

#### API Services
- **RESTful Architecture**: Well-structured API endpoints
- **CRUD Operations**: Complete data management for all entities
- **Authentication**: JWT-based secure authentication system
- **File Uploads**: Efficient image handling and storage
- **Data Validation**: Input validation and sanitization
- **Error Handling**: Comprehensive error management and logging

#### Security Features
- **Password Encryption**: Secure password hashing with bcrypt
- **JWT Tokens**: Stateless authentication with JSON Web Tokens
- **Protected Routes**: Authorization middleware for secure endpoints
- **CORS Configuration**: Controlled cross-origin resource sharing
- **Input Sanitization**: Protection against injection attacks

## Technology Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 18.x | UI framework |
| React Router | 6.x | Client-side routing |
| Context API | Built-in | State management |
| Axios | Latest | HTTP client |
| CSS3 | - | Styling |

### Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 16.x+ | Runtime environment |
| Express.js | 4.x | Web framework |
| MongoDB | 5.x+ | NoSQL database |
| Mongoose | 7.x | ODM for MongoDB |
| JWT | Latest | Authentication |
| Bcrypt | Latest | Password hashing |
| Multer | Latest | File uploads |
| Cors | Latest | CORS handling |

### Admin Panel Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 18.x | UI framework |
| Vite | 4.x | Build tool |
| Axios | Latest | HTTP client |
| CSS3 | - | Styling |

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         CLOTHSY Platform                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐         ┌──────────────┐                  │
│  │   Frontend   │────────▶│   Backend    │                  │
│  │   (React)    │◀────────│  (Node.js)   │                  │
│  └──────────────┘         └──────┬───────┘                  │
│                                   │                           │
│  ┌──────────────┐                │                           │
│  │ Admin Panel  │────────────────┘                           │
│  │   (Vite)     │                 │                           │
│  └──────────────┘                 │                           │
│                                   ▼                           │
│                           ┌──────────────┐                   │
│                           │   MongoDB    │                   │
│                           │  (Database)  │                   │
│                           └──────────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **User Request**: Client (Frontend/Admin) initiates request
2. **Authentication**: JWT token validation (if required)
3. **Processing**: Backend processes request and applies business logic
4. **Database Operation**: MongoDB performs CRUD operations
5. **Response**: Data returned to client in JSON format

### Component Architecture

- **Frontend**: Component-based architecture with Context API for state management
- **Backend**: MVC-inspired pattern with separate routes, controllers, and models
- **Admin Panel**: Modular component structure with dedicated pages and components

## Project Structure

```
CLOTHSY/
├── frontend/                    # Customer-facing application
│   ├── public/
│   ├── src/
│   │   ├── Components/          # Reusable UI components
│   │   ├── Context/             # State management
│   │   ├── Pages/               # Route pages
│   │   └── App.js               # Root component
│   ├── package.json
│   └── README.md
│
├── backend/                     # API server
│   ├── models/                  # Database schemas
│   ├── routes/                  # API routes
│   ├── middleware/              # Custom middleware
│   ├── uploads/                 # Uploaded images
│   ├── index.js                 # Entry point
│   ├── package.json
│   └── README.md
│
├── admin/                       # Administrative dashboard
│   ├── public/
│   ├── src/
│   │   ├── Components/          # UI components
│   │   ├── Pages/               # Admin pages
│   │   └── App.jsx              # Root component
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── screenshots/                 # Application screenshots
│   ├── homepage.png
│   ├── mens-category.png
│   ├── womens-category.png
│   ├── new-collections.png
│   ├── login.png
│   ├── cart.png
│   ├── admin-panel.png
│   └── newsletter.png
│
├── .gitignore
├── LICENSE
└── README.md                    # This file
```

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: v16.x or higher ([Download](https://nodejs.org/))
- **npm**: v8.x or higher (comes with Node.js)
- **MongoDB**: v5.x or higher ([Download](https://www.mongodb.com/try/download/community))
- **Git**: Latest version ([Download](https://git-scm.com/))

### Quick Start

#### 1. Clone the Repository

```bash
git clone https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB.git
cd Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (see Configuration section)
touch .env

# Start the server
npm start
```

**Backend runs on**: `http://localhost:4000`

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

**Frontend runs on**: `http://localhost:3000`

#### 4. Admin Panel Setup

```bash
# Navigate to admin directory (from project root)
cd admin

# Install dependencies
npm install

# Start development server
npm run dev
```

**Admin Panel runs on**: `http://localhost:5173`

### Installation Verification

After starting all three services, verify they're running:

| Service | URL | Status Check |
|---------|-----|--------------|
| Backend | http://localhost:4000 | Visit `/api/health` |
| Frontend | http://localhost:3000 | Open in browser |
| Admin | http://localhost:5173 | Open in browser |

## Configuration

### Environment Variables

#### Backend Configuration

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb://localhost:27017/clothsy
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/clothsy

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

# CORS
FRONTEND_URL=http://localhost:3000
ADMIN_URL=http://localhost:5173
```

#### Frontend Configuration (Optional)

Create a `.env` file in the `frontend/` directory:

```env
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_ENVIRONMENT=development
```

#### Admin Panel Configuration (Optional)

Create a `.env` file in the `admin/` directory:

```env
VITE_API_URL=http://localhost:4000/api
VITE_ENVIRONMENT=development
```

### Security Best Practices

⚠️ **Important Security Notes:**

- **Never commit `.env` files** to version control
- Use strong, unique JWT secrets (minimum 32 characters)
- Change default credentials before deployment
- Use environment-specific configurations
- Enable HTTPS in production
- Implement rate limiting for API endpoints

### Database Setup

#### Local MongoDB

```bash
# Start MongoDB service
mongod

# Create database (automatic on first connection)
# The application will create 'clothsy' database automatically
```

#### MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add database user
4. Whitelist IP address
5. Get connection string
6. Update `MONGO_URI` in `.env`

## API Documentation

### Base URL

```
http://localhost:4000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | User login | No |
| GET | `/auth/user` | Get user profile | Yes |

### Product Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/products` | Get all products | No |
| GET | `/products/:id` | Get single product | No |
| POST | `/products` | Create product | Yes (Admin) |
| PUT | `/products/:id` | Update product | Yes (Admin) |
| DELETE | `/products/:id` | Delete product | Yes (Admin) |

### Cart Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/cart` | Get user cart | Yes |
| POST | `/cart/add` | Add to cart | Yes |
| PUT | `/cart/update` | Update cart item | Yes |
| DELETE | `/cart/remove/:id` | Remove from cart | Yes |

### Request/Response Examples

#### Register User

**Request:**
```json
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## Security

### Implemented Security Measures

#### Authentication & Authorization
- **JWT Tokens**: Stateless authentication mechanism
- **Password Hashing**: Bcrypt with salt rounds for secure password storage
- **Protected Routes**: Middleware-based authorization
- **Role-Based Access**: Separate permissions for users and admins

#### Data Protection
- **Input Validation**: Server-side validation for all inputs
- **Sanitization**: Protection against XSS and injection attacks
- **CORS Policy**: Controlled cross-origin access
- **Rate Limiting**: Prevention of brute-force attacks
- **Helmet.js**: Security headers configuration

#### Best Practices
- Environment variables for sensitive data
- Secure HTTP headers
- HTTPS enforcement in production
- Regular security audits
- Dependency vulnerability scanning

### Security Checklist

- [ ] Change default JWT secret
- [ ] Use strong database passwords
- [ ] Enable HTTPS in production
- [ ] Implement rate limiting
- [ ] Set up CORS properly
- [ ] Validate all user inputs
- [ ] Sanitize database queries
- [ ] Keep dependencies updated
- [ ] Implement logging and monitoring
- [ ] Regular security audits

## Deployment

### Production Deployment

#### Backend Deployment (Example: Heroku)

```bash
# Install Heroku CLI and login
heroku login

# Create new app
heroku create clothsy-api

# Set environment variables
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret

# Deploy
git push heroku main
```

#### Frontend Deployment (Example: Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

#### Admin Panel Deployment (Example: Netlify)

```bash
# Build production bundle
cd admin
npm run build

# Deploy using Netlify CLI or drag-and-drop
```

### Deployment Checklist

- [ ] Set production environment variables
- [ ] Configure production database
- [ ] Enable HTTPS/SSL certificates
- [ ] Set up CDN for static assets
- [ ] Configure domain names
- [ ] Implement monitoring and logging
- [ ] Set up automated backups
- [ ] Configure error tracking (e.g., Sentry)
- [ ] Optimize images and assets
- [ ] Enable compression (gzip/brotli)

## Testing

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# Admin tests
cd admin
npm test
```

## Performance Optimization

### Implemented Optimizations
- Code splitting and lazy loading
- Image optimization and compression
- Database indexing
- Caching strategies
- Minification and bundling
- CDN for static assets

## Troubleshooting

### Common Issues

#### MongoDB Connection Error
```bash
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Ensure MongoDB is running locally or check your MONGO_URI

#### Port Already in Use
```bash
Error: listen EADDRINUSE: address already in use :::4000
```
**Solution**: Change port in `.env` or kill process using the port

#### CORS Error
```bash
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Verify CORS configuration in backend and check allowed origins

## Future Enhancements

### Planned Features

#### Phase 1 (Q2 2026)
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order tracking and management
- [ ] Email notifications
- [ ] Product reviews and ratings

#### Phase 2 (Q3 2026)
- [ ] User wishlists
- [ ] Advanced search and filters
- [ ] Product recommendations
- [ ] Multi-language support

#### Phase 3 (Q4 2026)
- [ ] Mobile application (React Native)
- [ ] Admin analytics dashboard
- [ ] Inventory management system
- [ ] Promotional codes and discounts

## Contributing

We welcome contributions from the community! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## Support

For support, please:
- Open an issue on GitHub: [Issues](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB/issues)
- Contact: kaushalkr585@gmail.com


## Acknowledgments

- Thanks to all contributors who have helped build CLOTHSY
- Inspiration from modern e-commerce platforms
- Built with love using the MERN stack

## Author

**Kaushal Kumar**  
Full Stack Developer

- GitHub: [@kaushalkr585-cmd](https://github.com/kaushalkr585-cmd)
- Email: kaushalkr585@gmail.com
- Repository: [Ecommerce-Website](https://github.com/kaushalkr585-cmd/Ecommerce-Website-HTML-CSS-JS-REACT-NODE-EXPRESS-MONGODB)

---

<div align="center">

**CLOTHSY – Full Stack E-Commerce Platform**

Made with ❤️ by Kaushal Kumar

[⬆ Back to Top](#clothsy--full-stack-e-commerce-platform)

</div>
