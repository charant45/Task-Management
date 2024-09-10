import React, { useState } from "react"
import { CalendarDays, ChevronDown } from "lucide-react"
import { Todo, useTodos } from "../context/todocontext"

interface TaskCardProps {
  task: Todo
  columnType: 'todo' | 'inProgress' | 'completed'
}

export default function TaskCard({ task, columnType }: TaskCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { updateTodo } = useTodos()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleStatusChange = async (newStatus: 'todo' | 'in progress' | 'done') => {
    try {
      await updateTodo(task.id, { status: newStatus })
      setIsDropdownOpen(false)
    } catch (error) {
      console.error("Error updating task status:", error)
    }
  }

  const getSlideBarColor = () => {
    switch (columnType) {
      case 'todo':
        return 'bg-purple-600'
      case 'inProgress':
        return 'bg-[#FFC14E]'
      case 'completed':
        return 'bg-[#06C270]'
      default:
        return 'bg-gray-400'
    }
  }

  const getPriorityStyle = () => {
    switch (task.priority) {
      case 'high':
        return 'text-[#FF5C00] bg-[#FFECE1]'
      case 'medium':
        return 'text-[#FF00B8] bg-[#FFECE1]'
      case 'low':
        return 'text-[#8A8A8A] bg-[#F0FFDD]'
      default:
        return 'text-gray-600 bg-gray-200'
    }
  }

  return (
    <article className="flex relative flex-col gap-3 p-4 mt-4 bg-white rounded-xl border border-solid shadow-xl border-neutral-200 w-full">
      <div className="flex justify-between items-center w-full">
        <div className={`text-xs leading-snug whitespace-nowrap ${getPriorityStyle()} px-2 py-1 rounded`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </div>
        <div className="relative">
          <div
            className={`object-contain shrink-0 aspect-square w-[15px] cursor-pointer ${
              isDropdownOpen ? "text-purple-600" : "text-black"
            }`}
            onClick={toggleDropdown}
          >
            <ChevronDown />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
              <div className="bg-white rounded-md">
                <div className="px-4 py-2 text-black font-bold bg-[#E4ECFF]">
                  Change Status
                </div>
                <hr className="border-t border-[#BFBFBF]" />
                <ul className="py-1">
                  <li 
                    className="px-4 pl-6 text-black cursor-pointer font-normal hover:bg-gray-100"
                    onClick={() => handleStatusChange('todo')}
                  >
                    Todo
                  </li>
                  <hr className="border-t border-[#BFBFBF] w-4/5 mx-auto"/>
                  <li 
                    className="px-4 pl-6 text-black cursor-pointer font-normal hover:bg-gray-100"
                    onClick={() => handleStatusChange('in progress')}
                  >
                    In Progress
                  </li>
                  <hr className="border-t border-[#BFBFBF] w-4/5 mx-auto" />
                  <li 
                    className="px-4 pl-6 text-black cursor-pointer font-normal hover:bg-gray-100"
                    onClick={() => handleStatusChange('done')}
                  >
                    Completed
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-3 w-full relative">
        <h3 className="flex gap-1 items-start w-full text-lg font-semibold text-slate-900 relative z-10">
          <span className="flex-1 break-words">{task.title}</span>
        </h3>
        {task.description && (
          <p className="mt-1 text-xs text-zinc-500 relative z-0 break-words">{task.description}</p>
        )}
      </div>
      <div className="flex flex-col mt-3 w-full">
        <hr className="w-full border border-solid border-neutral-200 relative z-0" />
      </div>
      <div className="flex gap-10 items-center mt-3 w-full text-xs leading-none text-zinc-500 relative z-0">
        <div className="flex gap-1 items-center self-stretch my-auto">
          <CalendarDays className="w-4 h-4" />
          <time className="self-stretch my-auto">{task.dueDate}</time>
        </div>
      </div>
      <div
        className={`flex absolute -left-px ${getSlideBarColor()} rounded-full h-[50px] min-h-[50px] top-[46px] w-[3px]`}
      />
    </article>
  )
}