// reducer refactoring using Redux Toolkit:
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from "./actions";
import { statusFilters } from "./constants";
import { createReducer } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      // ✅ Immer va înlocui acest lucru cu o operație de actualizare
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      // ✅ Good
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(toggleCompleted, (state, action) => {
      // ✅ Immer va înlocui acest lucru cu o operație de actualizare
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    // ✅ Immer va înlocui acest lucru cu o operație de actualizare
    state.status = action.payload;
  });
});
