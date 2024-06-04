import { useState } from "react";
import "./App.css";
import NewTodoForm from "./NewTodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      // updates the state variable todos using setTodos
      // takes the previous state of todos (currentTodos) and appends a new todo item to it

      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodos = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo list</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodos(todo.id)}
                // have a function you call (via de callback) when the button is pressed
                className="btn btn-danger"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
