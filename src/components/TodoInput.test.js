///<reference types="Jest"/>

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoInput } from "./TodoInput";
import user from "@testing-library/user-event";

test("it should have writable inputs", async () => {
  const setTodo = jest.fn();
  const addTodo = jest.fn();
  render(<TodoInput setTodo={setTodo} addTodo={addTodo} />);
  const taskInput = screen.getByPlaceholderText("Create a new task");

  await user.click(taskInput)
  await user.keyboard("Mi primera tarea");

  expect(taskInput).toHaveValue("Mi primera tarea");
});

test("the button should execute a function", async () => {
  const setTodo = jest.fn();
  const addTodo = jest.fn();
  render(<TodoInput setTodo={setTodo} addTodo={addTodo} />);
  const addButton = screen.getByRole("button", {
    name: /add/i
  });

  await user.click(addButton);
  expect(addTodo).toBeCalled();
});
