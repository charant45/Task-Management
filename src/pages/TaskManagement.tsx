import React, { useState } from 'react';
import Header from "../components/Header";
import TaskColumn from "../components/TaskColumn";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays } from 'lucide-react';

interface Task {
  priority: string;
  title: string;
  description: string;
  dueDate: string;
}

const todoTasks: Task[] = [
  {
    priority: 'High',
    title: 'Brainstorming',
    description: 'Brainstorming brings team members\' diverse experience into play.', 
    dueDate: '18/09/2024'
  },
  {
    priority: 'High',
    title: 'Wireframes',
    description: 'Low fidelity wireframes include the most basic content and visuals.',
    dueDate: '18/09/2024'
  }
];

const inProgressTasks: Task[] = [
  {
    priority: 'Low',
    title: 'Onboarding Illustrations',
    description: '',
    dueDate: '18/10/2024'
  }
];

const completedTasks: Task[] = [
  {
    priority: 'Medium',
    title: 'Design System',
    description: 'It just needs to adapt the UI from what you did before',
    dueDate: '12/10/2024'
  }
];

const TaskManagement: React.FC = () => {
  const [showForm, setShowForm] = useState(false); // State to manage modal visibility
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // State to manage selected date

  const handleCreateTaskClick = () => {
    setShowForm(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowForm(false); // Hide the modal
  };

  return (
    <main className="flex overflow-hidden flex-col items-center pb-20 bg-slate-50 relative">
      <Header />

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="p-10 w-full max-w-3xl bg-white rounded-lg shadow-lg relative">
            <button 
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Create a New Task</h2>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Title <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Select here" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea placeholder="Add here" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Select Date <span className="text-red-500">*</span></label>
                <div className="relative flex items-center">
                  <div className="flex w-full border rounded-lg focus-within:ring-2 focus-within:ring-purple-600 ">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: Date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full px-3 py-2 border-none focus:outline-none focus:ring-0"
                      placeholderText="DD/MM/YY"
                      calendarClassName="custom-calendar"
                    />
                  </div>
                  <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Status</label>
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Select here</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Priority</label>
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Select here</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="button" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg mr-2" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-lg">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section className="flex flex-wrap gap-10 justify-between items-center p-6 mt-9 w-full bg-white rounded-xl max-w-[1000px] shadow-[0px_6px_56px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
        <h1 className="gap-8 self-stretch my-auto text-2xl font-semibold min-w-[240px] text-slate-900">
          Desktop & Mobile Application
        </h1>
        <button 
          onClick={handleCreateTaskClick} 
          className="gap-2 self-stretch px-6 py-3 my-auto text-base text-white bg-purple-600 rounded-md rotate-[0.0010058214196744296rad] max-md:px-5"
        >
          Create Task
        </button>
      </section>

      <section className="mt-9 w-full max-w-[1000px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <TaskColumn title="Todo" color="purple-600" tasks={todoTasks} />
          <TaskColumn title="In progress" color="amber-300" tasks={inProgressTasks} />
          <TaskColumn title="Completed" color="emerald-500" tasks={completedTasks} />
        </div>
      </section>
    </main>
  );
};

export default TaskManagement;