export function FilteredTodoList(todos, filter) {
    let filteredTodo;
    switch (filter) {
        case "ALL":
            filteredTodo = todos;
            break;
        case "ACTIVE":
            filteredTodo = todos.filter((item) => item.completed !== true);
            break;
        case "COMPLETED":
            filteredTodo = todos.filter((item) => item.completed === true);
            break;
        default:
            filteredTodo = todos;
            break;
    }

    return filteredTodo;
}