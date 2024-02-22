const appState = {
  tasks: [],
  filters: {},
};

import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

const tasksReducer = tasksSlice.reducer;
