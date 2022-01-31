import { useState, useEffect } from "react";
import { uid } from "../utils/generateId";
import { FilteredTodoList } from "../utils/getFilteredTodo";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";

export default function Todo() {
  let mockTodo = [
    { id: uid(), name: "Learn JavaScript", completed: true },
    { id: uid(), name: "Learn React", completed: false },
    { id: uid(), name: "Have a life!", completed: false },
    { id: uid(), name: "Say Hello!", completed: true },
  ];

  const [TodoList, setTodoList] = useState([]);
  const [Filter, setFilter] = useState("ALL"); // ACTIVE // COMPLETED

  const setTodoListToLocalStorage = (list) => {
    localStorage.setItem("TODO_STORAGE", JSON.stringify(list));
  };

  const getTodoListFromLocalStorage = () => {
    return localStorage.getItem("TODO_STORAGE");
  };

  useEffect(() => {
    let TODO_LIST = getTodoListFromLocalStorage();
    if (TODO_LIST === null || TODO_LIST === '[]') {
      setTodoList(mockTodo);
      setTodoListToLocalStorage(mockTodo);
    } else {
      try {
        setTodoList(JSON.parse(TODO_LIST));
      } catch (error) {
        console.log("We can not get Todo List Data from Local Storage");
      }
    }
  }, []);

  useEffect(() => {
    setTodoListToLocalStorage(TodoList);
  }, [TodoList]);

  const DeleteFromTodoList = (todoId) => {
    setTodoList((TodoItems) => {
      return TodoItems.filter((item) => item.id !== todoId);
    });
  };

  const DeleteAllCompletedTodos = () => {
    setTodoList((TodoItems) => {
      return TodoItems.filter((item) => item.completed !== true);
    });
  };

  const ToggleTodoCompleted = (todoId) => {
    let changedTodo = TodoList.map((todoItem) => {
      if (todoItem.id === todoId) {
        todoItem.completed = !todoItem.completed;
      }
      return todoItem;
    });

    setTodoList(changedTodo);
  };

  const AddTodo = (name) => {
    if (name.trim() === "") {
      return false;
    }
    let newTodo = { id: uid(), name: name.trim(), completed: false };
    setTodoList([...TodoList, newTodo]);
  };

  const IsCheckedAllTodo = () => {
    return (
      FilteredTodoList(TodoList, "ALL").length ===
      FilteredTodoList(TodoList, "COMPLETED").length
    );
  };

  const ToggleAllTodoCompletedState = (isCheckedAll) => {
    const checkedAllTodo = TodoList.map((todoItem) => {
      if (isCheckedAll) {
        todoItem.completed = false;
      } else {
        todoItem.completed = true;
      }
      // console.log(todoItem, isCheckedAll)
      return todoItem;
    });

    setTodoList(checkedAllTodo);
  };

  return (
    <section className="todoapp">
      <TodoHeader addTodo={AddTodo}></TodoHeader>
      <TodoMain
        todoList={TodoList}
        destroyTodo={DeleteFromTodoList}
        toggleTodoCompleted={ToggleTodoCompleted}
        selectedFilter={Filter}
        isCheckedAllTodo={IsCheckedAllTodo}
        toggleAllTodoCompletedState={ToggleAllTodoCompletedState}
      ></TodoMain>
      <TodoFooter
        todoList={TodoList}
        clearCompletedTodos={DeleteAllCompletedTodos}
        setFilter={setFilter}
        selectedFilter={Filter}
      ></TodoFooter>
    </section>
  );
}
