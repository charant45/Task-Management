import React from "react";
import TaskCard from "./TaskCard";

interface Task {
  priority: string;
  title: string;
  description: string;
  dueDate: string;
}

interface TaskColumnProps {
  title: string;
  color: string;
  tasks: Task[];
}

const getColorClass = (color: string) => {
  const colorMap: { [key: string]: string } = {
    "purple-600": "bg-purple-600",
    "amber-300": "bg-amber-300",
    "emerald-500": "bg-emerald-500",
  };
  return colorMap[color] || "";
};

const TaskColumn: React.FC<TaskColumnProps> = ({ title, color, tasks }) => {
  return (
    <div className="flex flex-col w-full max-md:w-full">
      <div className="flex overflow-hidden flex-col items-center pb-6 w-full bg-white rounded-xl border border-solid border-zinc-100 shadow-[24px_24px_80px_rgba(0,0,0,0.01)]">
        <h2
          className={`flex-1 shrink gap-2.5 self-stretch px-6 py-3 max-w-full text-base font-semibold text-center uppercase whitespace-nowrap ${getColorClass(color)} border-b border-zinc-100 w-[312px] max-md:px-5 rounded-t-xl`}
        >
          {title}
        </h2>
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} color={color} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;