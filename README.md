<h1>Task Management Application</h1>

This is a Task Management Application built with React. The application allows users to create, manage, and track tasks across different statuses, such as Todo, In Progress, and Completed.

<h3>Features</h3>

Create new tasks with title, description, due date, status, and priority.
View tasks categorized by their status.
Edit and update task details.
Responsive design for both desktop and mobile views.

<h3>Technologies Used</h3>
React
TypeScript
Tailwind CSS
React DatePicker
FontAwesome
Lucide React

<h3>Getting Started</h3>
<h4>Prerequisites</h4>

Make sure you have the following installed on your machine:
Node.js (>= 12.x)
npm (>= 6.x) or yarn (>= 1.x)

<h3>Installation</h3>
<h4>Clone the repository:</h4>

<pre>
gh repo clone charant45/Task-Management
cd task-management
</pre>

<h3>Install the dependencies:</h3>

<pre>
npm install
    or
yarn install
</pre>

<h3>Running the Application</h3>

<h4>To start the development server, run:</h4>

<pre>
npm run dev
    or
yarn start
</pre>

<h3>Building for Production</h3>

<h4>To build the application for production, run:</h4>
<pre>
npm run build
    or
yarn build
</pre>
The production-ready files will be in the build directory.

<h3>Project Structure</h3>

<pre>
task-management-app/
├── public/
│   ├── index.html
│   └── ...
|   ├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TaskColumn.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── TaskManagement.tsx
│   │   └── ...
│   ├── context/
│   │   └── todocontext.tsx
│   ├── lib/
│   │   └── firebase.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
</pre>


<h3>Components</h3>

<h4>Header</h4>

The Header component is responsible for displaying the application's header.

<h4>TaskColumn</h4>

The TaskColumn component is responsible for displaying tasks categorized by their status (Todo, In Progress, Completed).

<h4>TaskManagement</h4>

The TaskManagement component is the main page of the application, which includes the header, task columns, and the modal for creating new tasks.

<h3> Install Firebase SDK </h3>

<h4>First, make sure you have Firebase SDK installed in your project. Run the following command in your project directory: </h4>

<pre>
    npm install firebase
</pre>

<h3>Set Up Firebase Configuration</h3>

<h4>Create a .env file in your project's root directory (same level as package.json). Add your Firebase configuration values there:
</h4>

<pre>
 # Firebase configuration
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
</pre>

<h3>Usage</h3>

Creating a New Task
Click on the "Create Task" button.
Fill in the task details in the modal form.
Click "Create" to add the task to the appropriate column.

<h3>Viewing Tasks</h3>

Tasks are displayed in columns based on their status. You can view the details of each task by looking at the task cards in each column.

<h3>Contributing</h3>

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
