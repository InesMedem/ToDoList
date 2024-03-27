import { useState } from "react";
import "./App.css";

export default function App() {
  const [newItem, setNewItem] = useState("hihusduif");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevents the default behavior, to reload the page

    setTodos((currentTodos) => {
      // updates the state variable todos using setTodos
      // takes the previous state of todos (currentTodos) and appends a new todo item to it

      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label> New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo list</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn btn-danger">delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
