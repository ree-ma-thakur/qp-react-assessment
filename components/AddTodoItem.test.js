import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoItem from "./AddTodoItem";

describe("AddTodoItem component", () => {
  test("renders correctly", () => {
    render(<AddTodoItem onAdd={() => {}} />);
    expect(screen.getByPlaceholderText("Enter task name")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });
});
