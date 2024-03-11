import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    changeFilterName(state, action) {
      state.search = action.payload;
    },
    changeFilterStatus(state, action) {
      state.status = action.payload;
    },
    changeFilterPriorities(state, action) {
      state.priorities = action.payload;
    },
  },
});

export default filtersSlice;
