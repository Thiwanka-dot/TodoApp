# To-Do App

A simple To-Do application built using **HTML**, **CSS**, **JavaScript**, **ReactJS**, **Axios**, and **MongoDB**. This app allows users to create, read, update, and delete tasks, providing a seamless experience for managing daily activities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly interface for managing tasks
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Responsive design for mobile and desktop

## Technologies Used

- **HTML**: Structure of the application
- **CSS**: Styling the application
- **JavaScript**: Core functionality
- **ReactJS**: Building user interfaces
- **Axios**: Handling HTTP requests
- **MongoDB**: Database for storing tasks
- **Node.js**: Backend server (if applicable)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Thiwanka-dot/TodoApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todoapp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB database and update the connection string in your backend configuration.

5. Navigate to the backend of the project:

   ```bash
   cd todoapp-backend
   ```

6. Start the backend server:

   ```bash
   node server.js
   ```

7. Navigate to the frontend of the project:

   ```bash
   cd todoapp
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

## API Endpoints

- **GET** `/todos`: Retrieve all tasks
- **POST** `/todos`: Create a new task
- **PUT** `/todos/:id`: Update an existing task
- **DELETE** `/todos/:id`: Delete a task

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Use the interface to add, edit, and delete tasks.
3. Tasks will be stored in the MongoDB database.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License.
```
