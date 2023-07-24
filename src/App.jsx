import { useEffect, useState } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setList([...list, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = list.filter((todo) => {
      return todo !== text;
    });
    setList(newTodos);
  };

  return (
    <>
      <div className="App">
        <h1>React Todo App</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={list} remove={deleteTodo} />
      </div>
    </>
  );
}

export default App;
