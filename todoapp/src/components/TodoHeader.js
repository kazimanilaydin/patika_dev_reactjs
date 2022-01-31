import { useState } from "react";

export default function TodoHeader({ addTodo }) {
  const [TodoName, setTodoName] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    addTodo(TodoName);
    setTodoName("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={formSubmit}>
        <input
          value={TodoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
}
