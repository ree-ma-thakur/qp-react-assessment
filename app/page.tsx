"use client";
import AddTodoItem from "@/components/AddTodoItem";
import TodoList from "@/components/TodoList";
import { TodoFormItemProps } from "@/utils/Interfaces/TodoIn/TodoFormItemProps";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [todos, setTodos] = useState<TodoFormItemProps[]>([]);

  const handleAddTodo = (name: string) => {
    const newTodo: TodoFormItemProps = {
      id: Date.now(),
      name,
      isCompleted: false,
    };
    toast.success("Todo item added!", { autoClose: 1000 });
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <>
      <ToastContainer />
      <AddTodoItem onAdd={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggle} />
    </>
  );
}
