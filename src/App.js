import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "react-todo-list-todos";

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  function toggleComplete(id){
    setTodos(
      todos.map(todo => {

        if(todo.id === id ){
          return{
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )
  }
  function removeTodo(id){
    setTodos(
      todos.filter(todo => todo.id !== id));
  }
useEffect(()=>{
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(storageTodos){
    setTodos(storageTodos);
  }
},[]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <p>React Todo</p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
