import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function taskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form onSubmit={handleSubmit} action="">
      <input
        onChange={taskInputChange}
        label="Task"
        type="text"
        name="task"
        value={todo.task}
      />
      <button>Submit</button>
    </form>
  );
};

export default TodoForm;
