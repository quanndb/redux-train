// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../Filters/filtersSlice";
import todoListSlice from "../TodoList/todoListSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
export default store;
