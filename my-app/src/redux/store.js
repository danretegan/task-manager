// store refactoring using Redux Toolkit & Slice:
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./sliceTasks";
import { filtersReducer } from "./sliceFilters";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
