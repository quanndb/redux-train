export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const changeStatusTodo = (id) => {
  return {
    type: "todoList/changeStatusTodo",
    payload: id,
  };
};

export const changeFilterName = (text) => {
  return {
    type: "filters/changeFilterName",
    payload: text,
  };
};

export const changeFilterStatus = (status) => {
  return {
    type: "filters/changeFilterStatus",
    payload: status,
  };
};

export const changeFilterPriority = (priorities) => {
  return {
    type: "filters/changeFilterPriorities",
    payload: priorities,
  };
};
