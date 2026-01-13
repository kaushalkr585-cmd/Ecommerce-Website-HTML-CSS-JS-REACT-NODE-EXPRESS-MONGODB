# CLOTHSY – Frontend Application

## Overview

CLOTHSY is a modern e-commerce platform built with **React.js**. This repository contains the **frontend application** that provides users with an intuitive shopping experience, featuring product browsing, cart management, and authentication.

---

## Key Features

### User Experience
- **Authentication System**: Login and registration functionality
- **Product Browsing**: Browse products organized by categories
- **Product Details**: Detailed product information pages
- **Shopping Cart**: Add/remove products and manage cart
- **Responsive Design**: Works smoothly on all device sizes

### Technical Features
- Component-based architecture for maintainability
- Global state management using **React Context API**
- Scoped CSS styling for components
- Reusable UI components across the app

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend framework |
| JavaScript (ES6+) | Programming language |
| Context API | State management |
| CSS3 | Styling |
| Vite | Build tooling |

---

## Project Structure

frontend/
├── public/ # Static assets
├── src/
│ ├── Components/ # Reusable UI components
│ │ ├── Assets/ # Images, icons, and logos
│ │ ├── Breadcrumbs/ # Navigation breadcrumbs
│ │ ├── CartItems/ # Cart item components
│ │ ├── DescriptionBox/ # Product descriptions
│ │ ├── Footer/ # Footer component
│ │ ├── Hero/ # Hero/banner section
│ │ ├── Items/ # Product item cards
│ │ ├── Navbar/ # Navigation bar
│ │ ├── NewCollections/ # Featured collections
│ │ ├── NewsLetter/ # Newsletter subscription
│ │ ├── Offers/ # Promotional offers
│ │ ├── Popular/ # Popular products
│ │ ├── ProductDisplay/ # Product detail display
│ │ └── RelatedProducts/ # Product recommendations
│ │
│ ├── Context/ # Global state management
│ │ └── ShopContext.jsx # Shopping context provider
│ │
│ ├── Pages/ # Page-level components
│ │ ├── CSS/ # Page-specific styles
│ │ ├── Cart.jsx # Shopping cart page
│ │ ├── LoginSignup.jsx # Authentication page
│ │ ├── Product.jsx # Product details page
│ │ ├── Shop.jsx # Main shop page
│ │ └── ShopCategory.jsx # Category listing page
│ │
│ ├── App.js # Root component
│ ├── App.css # Global styles
│ ├── index.js # Application entry point
│ └── index.css # Base styles
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

yaml
Copy code

---

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

---

## Installation & Run (Local)

1. Go to the frontend folder:
```bash
cd frontend
Install dependencies:

bash
Copy code
npm install
Create .env file inside frontend/:

env
Copy code
VITE_API_URL=https://ecommerce-backend-teal-gamma.vercel.app
Start development server:

bash
Copy code
npm run dev
Frontend will run on:

arduino
Copy code
http://localhost:5173
Backend Integration
This frontend connects to the backend REST API.

Backend Base URL (Deployed)
arduino
Copy code
https://ecommerce-backend-teal-gamma.vercel.app
Environment Variable Used
The frontend uses this variable for API calls:

env
Copy code
VITE_API_URL=https://ecommerce-backend-teal-gamma.vercel.app
Example usage in code:

js
Copy code
fetch(`${import.meta.env.VITE_API_URL}/allproducts`)
Available Scripts
Command	Description
npm run dev	Runs the app in development mode
npm run build	Builds the app for production
npm run preview	Preview production build locally

Contributing
Contributions are welcome!

Fork the repository

Create a branch (git checkout -b feature/your-feature)

Commit changes (git commit -m "Add feature")

Push to branch (git push origin feature/your-feature)

Create a Pull Request

License
This project is part of the CLOTHSY e-commerce platform.

Author
Kaushal Kumar
Full Stack Developer