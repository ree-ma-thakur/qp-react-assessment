import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import "@testing-library/jest-dom";

describe("TodoList component", () => {
  test("renders todo items correctly", () => {
    const todos = [
      { id: 1, name: "Todo 1", isCompleted: false },
      { id: 2, name: "Todo 2", isCompleted: true },
    ];
    render(<TodoList todos={todos} onToggle={() => {}} />);
    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
  });
});
