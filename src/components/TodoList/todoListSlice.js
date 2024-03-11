import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, name: "Learn React", completed: false, priority: "Medium" },
    { id: 2, name: "Learn JS", completed: true, priority: "High" },
    { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    changeStatusTodo(state, action) {
      const currentTodo = state.filter((todo) => {
        if (todo.id === action.payload) return todo;
        return null;
      });
      currentTodo.completed = !currentTodo.completed;
    },
  },
});
export default todoListSlice;
