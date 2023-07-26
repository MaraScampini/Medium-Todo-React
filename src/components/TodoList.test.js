///<reference types="Jest"/>

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { TodoList } from "./TodoList";

const list = ["Hola", "Tarea2"];

const remove = jest.fn();

beforeEach(()=>render(<TodoList list={list} remove={remove} />));

test("it should render a list of tasks", () => {
  const taskList = screen.getAllByRole("listitem");

  expect(taskList).toHaveLength(list.length);
});

test("the button should execute a function", async () => {
  const taskButton = screen.getAllByRole("button", {
    name: /delete/i,
  });
  await user.click(taskButton[0]);

  expect(remove).toBeCalled();
});

test('each task should have its own button', () => {
  const taskList = screen.getAllByRole('listitem')
  const taskButton = screen.getAllByRole('button', {
    name: /delete/i
  })

  expect(taskList).toHaveLength(taskButton.length)
})

