import React, { useState } from 'react'
import Header from "../components/Header"
import TaskColumn from "../components/TaskColumn"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CalendarDays } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Todo, useTodos } from '../context/todocontext'

export default function TaskManagement() {
  const { todos, addTodo, loading } = useTodos()
  const [showForm, setShowForm] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [newTask, setNewTask] = useState<Omit<Todo, 'id'>>({
    title: '',
    description: '',
    dueDate: '',
    status: '',
    priority: ''
  })

  const handleCreateTaskClick = () => {
    setShowForm(true)
  }

  const handleCloseModal = () => {
    setShowForm(false)
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      status: '',
      priority: ''
    })
    setSelectedDate(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value })
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
    if (date) {
      setNewTask({ ...newTask, dueDate: date.toISOString().split('T')[0] })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const taskToAdd = {
        ...newTask,
        status: newTask.status || 'todo',
        priority: newTask.priority || 'low'
      }
      await addTodo(taskToAdd)
      handleCloseModal()
    } catch (error) {
      console.error("Error adding task:", error)
    }
  }

  const todoTasks = todos.filter(task => task.status === 'todo')
  const inProgressTasks = todos.filter(task => task.status === 'in progress')
  const completedTasks = todos.filter(task => task.status === 'done')

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <main className="flex overflow-hidden flex-col items-center pb-20 bg-slate-50 relative">
      <Header />

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="p-10 w-full max-w-3xl bg-white rounded-lg shadow-lg relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faPlusCircle} size='xl' style={{ color: '#8A30E5' }} />
                <h2 className="text-2xl font-semibold">Create New Task</h2>
              </div>
              <button 
                onClick={handleCloseModal}
                className="text-black-600 hover:text-gray-900 text-5xl p-2"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Title <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                  placeholder="Enter task title" 
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" 
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea 
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  placeholder="Add task description" 
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Select Date <span className="text-red-500">*</span></label>
                <div className="relative flex items-center">
                  <div className="flex w-full border rounded-lg focus-within:ring-2 focus-within:ring-purple-600">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="w-full px-3 py-2 border-none focus:outline-none focus:ring-0"
                      placeholderText="DD/MM/YY"
                      calendarClassName="custom-calendar"
                      required
                    />
                    <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Status</label>
                <select 
                  name="status"
                  value={newTask.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 default-blue"
                  style={{ color: newTask.status ? 'inherit' : '#BFBFBF' }}
                >
                  <option value="" disabled style={{ color: '#BFBFBF' }}>Select status</option>
                  <option value="todo">Todo</option>
                  <option value="in progress">In Progress</option>
                  <option value="done">Completed</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Priority</label>
                <select 
                  name="priority"
                  value={newTask.priority}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 default-blue"
                  style={{ color: newTask.priority ? 'inherit' : '#BFBFBF' }}
                >
                  <option value="" disabled style={{ color: '#BFBFBF' }}>Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
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
          <TaskColumn title="Todo" color="purple-600" tasks={todoTasks} columnType="todo" />
          <TaskColumn title="In progress" color="amber-300" tasks={inProgressTasks} columnType="inProgress" />
          <TaskColumn title="Completed" color="emerald-500" tasks={completedTasks} columnType="completed" />
        </div>
      </section>
    </main>
  )
}