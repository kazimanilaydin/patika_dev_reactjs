import { FilteredTodoList } from "../utils/getFilteredTodo";

import { useState, useEffect } from "react";

export default function TodoFooter({
  todoList,
  clearCompletedTodos,
  setFilter,
  selectedFilter,
}) {
  const [ActiveTodoCount, setActiveTodoCount] = useState(
    FilteredTodoList(todoList, "ACTIVE").length
  );

  useEffect(() => {
    setActiveTodoCount(FilteredTodoList(todoList, "ACTIVE").length);
  }, [todoList]);

  return (
    <>
      {todoList.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{ActiveTodoCount}</strong>
            {ActiveTodoCount > 1 ? "items" : "item"} left
          </span>

          <ul className="filters">
            <li>
              <a
                className={selectedFilter == "ALL" ? "selected" : ""}
                onClick={() => setFilter("ALL")}
              >
                All
              </a>
            </li>
            <li>
              <a
                className={selectedFilter == "ACTIVE" ? "selected" : ""}
                onClick={() => setFilter("ACTIVE")}
              >
                Active
              </a>
            </li>
            <li>
              <a
                className={selectedFilter == "COMPLETED" ? "selected" : ""}
                onClick={() => setFilter("COMPLETED")}
              >
                Completed
              </a>
            </li>
          </ul>

          {ActiveTodoCount > 0 && (
            <button className="clear-completed" onClick={clearCompletedTodos}>
              Clear completed
            </button>
          )}
        </footer>
      )}
    </>
  );
}
