import { statusFilters } from "./constants";
// Importăm funcția de compoziție pentru reducers:
import { combineReducers } from "redux";

const taskInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// Este responsabil doar pentru actualizarea proprietății tasks
// Acum valoarea parametrului state va fi o matrice de sarcini
const tasksReducer = (state = taskInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];

    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);

    case "tasks/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }

        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

// Este responsabil doar pentru actualizarea proprietății filters
// Acum valoarea parametrului state va fi un obiect cu valorile filtrului
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    default:
      return state;
  }
};

// Codul funcțiilor tasksReducer și filtersReducer:
export const rootReducer = combineReducers ({
    tasks: tasksReducer,
    filters: filtersReducer,
})
