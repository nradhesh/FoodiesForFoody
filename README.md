﻿# FoodiesForFoody

FoodiesForFoody is a full-stack web application designed to manage food items and user interactions for a food delivery or restaurant management system. It provides an admin interface for managing food items and users, along with a backend API for handling data operations.

# Admin panel
![Screenshot (485)](https://github.com/user-attachments/assets/7fdbdf65-49df-49ed-b179-c3b88815eddb)

# User End Application
![Screenshot (486)](https://github.com/user-attachments/assets/44c1d733-d497-4b3f-8433-275706b9c664)

# Cart & Order Summary
![Screenshot (487)](https://github.com/user-attachments/assets/68ce65b5-0dc2-46fa-ad0e-85ad1e7c3ebf)

# Checkout page
![Screenshot (488)](https://github.com/user-attachments/assets/806da76e-d997-4abe-9e79-34b01968ff6b)

# Login
![Screenshot (489)](https://github.com/user-attachments/assets/cfbef047-272a-45ee-b594-3bd9c738d532)


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

### Admin Panel
- Add, update, delete, and view food items
- Manage user accounts and permissions
- View order statistics and reports
- Handle the customer orders

### Food Management
- Display food items with images, descriptions, categories, and prices
- Filter and search functionality for food items
- Delete food items with confirmation dialog
- Edit existing food items

### User Management
- Register new users with validation
- Secure user authentication and authorization

## Technologies Used

### Frontend
- **React.js**: For building the user interface
- **Bootstrap**: For responsive design and styling
- **Axios**: For making HTTP requests
- **React Router**: For page navigation
- **Vite**: As the build tool and development server

### Backend
- **Spring Boot**: For building the RESTful API
- **Spring Data MongoDB**: For database interaction
- **Spring Security**: For authentication and authorization
- **MongoDB**: As the database for storing food and user data

### Other Tools
- **Lombok**: To reduce boilerplate code in Java
- **Maven**: For dependency management
- **Postman**: For API testing
- **Git**: For version control
- **Razorpay**:For payement gateway integration

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Java JDK 11 or higher installed
- MongoDB installed and running
- Maven installed
- Eclipse IDE for Spring Boot and also VS Code
### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd foodiesapi
   ```

2. Install dependencies:
   ```bash
   mvn install
   ```

3. Configure MongoDB connection in `application.properties`:
   ```properties
   spring.data.mongodb.host=localhost
   spring.data.mongodb.port=27017
   spring.data.mongodb.database=foodiesdb
   ```

4. Run the backend server:
   ```bash
   mvn spring-boot:run
   ```
   The server will start on http://localhost:8080

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd foodies
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the API base URL in your service files.

4. Start the development server:
   ```bash
   npm run dev
   ```
   The application will open on http://localhost:5173 (default Vite port)

### Admin Panel Setup
1. Navigate to the admin panel directory:
   ```bash
   cd frontend-admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The admin panel will open on a different port (likely http://localhost:5174)

## Project Structure

The project consists of three main parts:

```
FoodiesForFoody/
├── foodies/                     # Main frontend application
│   ├── node_modules/            # Node dependencies
│   ├── public/                  # Static files
│   ├── src/
│   │   ├── assets/              # Images and other assets
│   │   ├── components/          # React components
│   │   ├── context/             # React context providers
│   │   ├── pages/               # Page components
│   │   ├── service/             # API service functions
│   │   ├── util/                # Utility functions
│   │   ├── App.css              # App styling
│   │   ├── App.jsx              # Main App component
│   │   ├── index.css            # Global styling
│   │   └── main.jsx             # Application entry point
│   ├── .gitignore
│   ├── eslint.config.js         # ESLint configuration
│   ├── index.html
│   ├── package-lock.json        # Package lock file
│   ├── package.json             # npm dependencies
│   ├── README.md                # Frontend documentation
│   └── vite.config.js           # Vite configuration
│
├── frontend-admin/              # Admin panel frontend
│   ├── node_modules/            # Node dependencies
│   ├── public/                  # Static files
│   ├── src/
│   │   ├── assets/              # Images and other assets
│   │   ├── components/          # React components
│   │   ├── pages/               # Page components
│   │   ├── services/            # API service functions
│   │   ├── App.css              # App styling
│   │   ├── App.jsx              # Main App component
│   │   ├── index.css            # Global styling
│   │   └── main.jsx             # Application entry point
│   ├── .gitignore
│   ├── eslint.config.js         # ESLint configuration
│   ├── index.html
│   ├── package-lock.json        # Package lock file
│   ├── package.json             # npm dependencies
│   ├── README.md                # Admin panel documentation
│   └── vite.config.js           # Vite configuration
│
└── foodiesapi/                  # Backend Spring Boot application
    ├── .idea/                   # IntelliJ IDEA files
    ├── .mvn/                    # Maven wrapper
    ├── src/
    │   ├── main/
    │   │   ├── java/com/foody/foodiesapi/
    │   │   │   ├── config/             # Configuration classes
    │   │   │   ├── controller/         # REST API controllers
    │   │   │   ├── entity/             # Data models
    │   │   │   ├── io/                 # Input/Output classes
    │   │   │   ├── repository/         # Database repositories
    │   │   │   ├── service/            # Business logic
    │   │   │   └── FoodiesapiApplication.java # Main class
    │   │   └── resources/
    │   │       └── application.properties # Application configuration
    │   └── test/                       # Backend tests
    ├── target/                         # Compiled files
    ├── .gitattributes
    ├── .gitignore
    ├── HELP.md                         # Spring Boot help info
    ├── mvnw                            # Maven wrapper script
    ├── mvnw.cmd                        # Maven wrapper Windows script
    └── pom.xml                         # Maven dependencies
```

## Future Enhancements

### Deployment
- **CI/CD Pipeline**: Implementation of continuous integration and continuous deployment using Jenkins or GitHub Actions
- **Docker Containerization**: Containerizing the application for consistent deployment across environments
- **Cloud Hosting**: Deployment to cloud platforms such as AWS, Google Cloud, or Azure
- **Serverless Functions**: Exploring serverless deployment options for specific features

### Payment Gateway Integration
- **Razorpay Integration**: Implementation of Razorpay for credit/debit card payments and also UPI
- **Payment Security**: Enhanced security measures including PCI DSS compliance

### Other Planned Features
- **Analytics Dashboard**: Implementation of advanced analytics for business insights
- **Dark Mode**: Implementation of dark mode UI option


## License
This project is licensed under the MIT License - see the LICENSE file for details.
