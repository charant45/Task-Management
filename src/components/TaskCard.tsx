import React, { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

interface TaskCardProps {
  priority: string;
  title: string;
  description: string;
  dueDate: string;
  color: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  priority,
  title,
  description,
  dueDate,
  color,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <article className="flex relative flex-col gap-3 p-4 mt-4 max-w-full bg-white rounded-xl border border-solid shadow-xl border-neutral-200 w-[264px]">
      <div className="flex flex-wrap gap-2 items-start w-full text-xs leading-snug text-orange-600 whitespace-nowrap">
        <span className="gap-1 self-stretch px-2 py-1 bg-rose-100 rounded">
          {priority}
        </span>
      </div>
      <div className="flex flex-col mt-3 w-full relative">
        <h3 className="flex gap-1 items-start w-full text-lg font-semibold whitespace-nowrap text-slate-900 relative z-10">
          <span className="flex-1 shrink basis-0">{title}</span>
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
                    <li className="px-4 pl-6 text-black cursor-pointer font-normal hover:bg-gray-100">
                      Todo
                    </li>
                    <hr className="border-t border-[#BFBFBF] w-4/5 mx-auto"/>
                    <li className="px-4 pl-6 text-black cursor-pointer font-normal hover:bg-gray-100">
                      In Progress
                    </li>
                    <hr className="border-t border-[#BFBFBF] w-4/5 mx-auto" />
                    <li className="px-4 pl-6 text-black cursor-pointer font-normal hover:bg-gray-100">
                      Completed
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </h3>
        {description && (
          <p className="mt-1 text-xs text-zinc-500 relative z-0">{description}</p>
        )}
      </div>
      <div className="flex flex-col mt-3 w-full">
        <hr className="w-full border border-solid border-neutral-200 relative z-0" />
      </div>
      <div className="flex gap-10 items-center mt-3 w-full text-xs leading-none whitespace-nowrap text-zinc-500 relative z-0">
        <div className="flex gap-1 items-center self-stretch my-auto">
          <div className="object-contain shrink-0 self-stretch my-auto w-[24px] aspect-square">
            <CalendarDays />
          </div>
          <time className="self-stretch my-auto">{dueDate}</time>
        </div>
      </div>
      <div
        className={`flex absolute -left-px bg-${color} rounded-full h-[50px] min-h-[50px] top-[46px] w-[3px]`}
      />
    </article>
  );
};

export default TaskCard;
