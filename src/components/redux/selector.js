import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const filterSearchSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => {
  console.log(state.filters.priorities);
  return state.filters.priorities;
};

export const todoRemaining = createSelector(
  todoListSelector,
  filterSearchSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, filterSearch, filterStatus, filterPriorities) => {
    return todoList.filter((todo) => {
      if (filterStatus === "All") {
        return (
          todo.name.includes(filterSearch) &&
          (filterPriorities.length
            ? filterPriorities.includes(todo.priority)
            : true)
        );
      }
      return (
        (filterStatus === "Completed" ? todo.completed : !todo.completed) &&
        todo.name.includes(filterSearch) &&
        (filterPriorities.length
          ? filterPriorities.includes(todo.priority)
          : true)
      );
    });
  }
);
