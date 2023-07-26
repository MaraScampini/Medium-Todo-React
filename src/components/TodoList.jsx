import React from "react";

export const TodoList = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((todo, index) => (
            <div key={index} className="todo">
              <li>{todo}</li>
              <button className="delete-button" onClick={() => remove(todo)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No tasks found</p>
        </div>
      )}{" "}
    </>
  );
};
