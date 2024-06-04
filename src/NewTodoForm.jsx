import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("hihusduif");

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevents the default behavior, to reload the page
    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  };
  return (
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
  );
};

export default NewTodoForm;
