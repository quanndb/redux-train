const initialState = {
  filters: {
    search: "",
    status: "All",
    priorities: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "Medium" },
    { id: 2, name: "Learn JS", completed: true, priority: "High" },
    { id: 3, name: "Learn Redux", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo": {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case "todoList/changeStatusTodo": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }

    case "filters/changeFilterName": {
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    }

    case "filters/changeFilterStatus": {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    }

    case "filters/changeFilterPriorities": {
      return {
        ...state,
        filters: {
          ...state.filters,
          priorities: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
