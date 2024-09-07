import React from "react";
import { CalendarDays } from 'lucide-react';
import { ChevronDown } from 'lucide-react';


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
  return (
    <article className="flex relative flex-col gap-3 p-4 mt-4 max-w-full bg-white rounded-xl border border-solid shadow-xl border-neutral-200 w-[264px]">
      <div className="flex z-0 flex-wrap gap-2 items-start w-full text-xs leading-snug text-orange-600 whitespace-nowrap">
        <span className="gap-1 self-stretch px-2 py-1 bg-rose-100 rounded">
          {priority}
        </span>
      </div>
      <div className="flex z-0 flex-col mt-3 w-full">
        <h3 className="flex gap-1 items-start w-full text-lg font-semibold whitespace-nowrap text-slate-900">
          <span className="flex-1 shrink basis-0">{title}</span>
          <div className="object-contain shrink-0 aspect-square w-[15px]">
          <ChevronDown />
          </div>
        </h3>
        {description && (
          <p className="mt-1 text-xs text-zinc-500">{description}</p>
        )}
      </div>
      <div className="flex z-0 flex-col mt-3 w-full">
        <hr className="w-full border border-solid border-neutral-200" />
      </div>
      <div className="flex z-0 gap-10 items-center mt-3 w-full text-xs leading-none whitespace-nowrap text-zinc-500">
        <div className="flex gap-1 items-center self-stretch my-auto">
        <div className="object-contain shrink-0 self-stretch my-auto w-[24px] aspect-square">
          <CalendarDays />
        </div>
          <time className="self-stretch my-auto">{dueDate}</time>
        </div>
      </div>
      <div
        className={`flex absolute -left-px z-0 bg-${color} rounded-full h-[50px] min-h-[50px] top-[46px] w-[3px]`}
      />
    </article>
  );
};

export default TaskCard;
