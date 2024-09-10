import React from 'react';
import TaskManagement from './pages/TaskManagement';
import { TodoProvider } from './context/todocontext';

function App() {
  return (
    <React.Fragment>
      <TodoProvider>
        <TaskManagement />
      </TodoProvider>
    </React.Fragment>
  );
}

export default App;