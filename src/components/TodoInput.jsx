import React from 'react'

export const TodoInput = ({todo, setTodo, addTodo}) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        placeholder="Create a new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="add-button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
