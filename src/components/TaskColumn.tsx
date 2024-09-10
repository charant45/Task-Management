import React from 'react';
import { Todo } from '../context/todocontext';
import TaskCard from './TaskCard';


interface TaskColumnProps {
  title: string;
  color: string;
  tasks: Todo[];
  columnType: 'todo' | 'inProgress' | 'completed';
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, color, tasks, columnType }) => {
  const getColumnHeaderStyle = (type: string) => {
    switch (type) {
      case 'todo':
        return 'bg-purple-600 text-white'
      case 'inProgress':
        return 'bg-yellow-400 text-black'
      case 'completed':
        return 'bg-green-500 text-white'
      default:
        return ''
    }
  }
  return (
    <div className={`flex-1 bg-white rounded-xl p-6 shadow-md ${tasks.length === 0 ? 'h-[200px]' : 'min-h-[200px]'}`}>
      <h2 className={`text-lg font-semibold p-4  text-center rounded-t-xl ${getColumnHeaderStyle(columnType)}`}>
        {title}
      </h2>
      <div className={`${tasks.length === 0 ? 'h-[120px] flex items-center justify-center' : ''}`}>
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center">No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} columnType={columnType} />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskColumn;