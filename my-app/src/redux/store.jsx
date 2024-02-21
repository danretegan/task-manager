import { configureStore } from "redux";

// Valoarea inițială a stării Redux pentru reducer-ul rădăcină
// dacă nu este trecut parametrul preloadedState:
const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: "all",
  },
};

// Deocamdată vom folosi un reducer care returnează doar starea primită:
const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore(rootReducer);