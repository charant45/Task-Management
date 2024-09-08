# Task Management Application

This is a Task Management Application built with React. The application allows users to create, manage, and track tasks across different statuses such as Todo, In Progress, and Completed.

## Features

- Create new tasks with title, description, due date, status, and priority.
- View tasks categorized by their status.
- Edit and update task details.
- Responsive design for both desktop and mobile views.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React DatePicker
- FontAwesome
- Lucide React

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app

2. Install the dependencies: 

   npm install
   # or
   yarn install
  
  Running the Application 

  To start the development server, run:

  npm run dev
  # or
  yarn start

  Building for Production

  To build the application for production, run:
 
  npm run build
  # or
  yarn build
  The production-ready files will be in the build directory.

  Project Structure

  task-management-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TaskColumn.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── TaskManagement.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md


  Components

  Header

  The Header component is responsible for displaying the application's header.

  TaskColumn

The TaskColumn component is responsible for displaying tasks categorized by       their status (Todo, In Progress, Completed).

  TaskManagement

The TaskManagement component is the main page of the application, which   includes  the header, task columns, and the modal for creating new tasks.

Usage

Creating a New Task
Click on the "Create Task" button.
Fill in the task details in the modal form.
Click "Create" to add the task to the appropriate column.

Viewing Tasks

Tasks are displayed in columns based on their status. You can view the details of each task by looking at the task cards in each column.

Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
