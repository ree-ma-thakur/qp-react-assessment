import React from "react";
import { TodoItemProps } from "@/utils/Interfaces/TodoIn/TodoItemProps";

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  name,
  isCompleted,
  onToggle,
}) => {
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div className="flex items-center mb-4 bg-white">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleToggle}
        className="mr-2 form-checkbox h-5 w-5 text-indigo-600"
      />
      <span
        className={isCompleted ? "line-through text-gray-400" : "text-black"}
      >
        {name}
      </span>
    </div>
  );
};

export default TodoItem;
