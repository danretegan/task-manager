import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", (text) => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

console.log(addTask("Learn Redux Toolkit"));
/**
 * {
 *   type: 'tasks/addTask',
 *   payload: {
 *     text: 'Learn Redux Toolkit',
 *     id: '4AJvwMSWEHCchcWYga3dj',
 *     completed: false
 *   }
 * }
 **/

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("tasks/setStatusFilter");

// Generatorul de acțiuni are o proprietate type:
console.log(addTask.type); // "tasks/AddTask"

// Metoda toString() a funcției addTask a fost suprascrisă
console.log(addTask.toString()); // "tasks/AddTask"
