import React from "react";
import { FixedSizeList } from "react-window";
import { toast } from "react-toastify";
import TodoItem from "./TodoItem";
import { TodoProps } from "@/utils/Interfaces/TodoIn/TodoProps";

interface TodoListProps {
  todos: TodoProps[];
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  const handleToggle = (id: number) => {
    onToggle(id);
    toast.success("Todo item status changed!", { autoClose: 1000 });
  };

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const todo = todos[index];
    return (
      <div style={style}>
        <TodoItem key={todo.id} {...todo} onToggle={handleToggle} />
      </div>
    );
  };

  return (
    <div className="m-4">
      <FixedSizeList
        height={400}
        width="100%"
        itemCount={todos.length}
        itemSize={50}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default TodoList;
