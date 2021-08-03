import React from "react";
const Todo = ({ todo, toggleComplete, removeTodo }) => {
function handleCheckboxClick(){
    toggleComplete(todo.id);
}
function handleRemoveClick(){
removeTodo(todo.id);
}

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
            textDecoration: todo.completed ? "line-through" : null
          }}>
        {todo.task}
      </li>
      <button onClick ={handleRemoveClick}>x</button>
    </div>
  );
};

export default Todo;
