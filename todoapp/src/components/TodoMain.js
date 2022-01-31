import { useState, useEffect } from "react";
import { FilteredTodoList } from "../utils/getFilteredTodo";

export default function TodoMain({
  todoList,
  destroyTodo,
  toggleTodoCompleted,
  selectedFilter,
  isCheckedAllTodo,
  toggleAllTodoCompletedState,
}) {
  const [ToggleAllCheckbox, setToggleAllCheckbox] = useState(false);

  const onChangeInput = () => {
    toggleAllTodoCompletedState(isCheckedAllTodo());
  };

  useEffect(() => {
    setToggleAllCheckbox(isCheckedAllTodo());
  }, []);

  useEffect(() => {
    setToggleAllCheckbox(isCheckedAllTodo());
  }, [todoList]);

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={ToggleAllCheckbox}
        onChange={() => {
          onChangeInput();
        }}
      />

      <ul className="todo-list">
        {FilteredTodoList(todoList, selectedFilter).map((todoItem) => (
          <li
            id={todoItem.id}
            key={todoItem.id}
            className={todoItem.completed ? "completed" : ""}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => toggleTodoCompleted(todoItem.id)}
              />
              <label> {todoItem.name}</label>
              <button
                className="destroy"
                onClick={() => destroyTodo(todoItem.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
