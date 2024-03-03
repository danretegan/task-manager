export const statusFilters = Object.freeze({
  all: "all",
  active: "active",
  completed: "completed",
});

// Folosim metoda Object.freeze() pentru a «îngheța» obiectul cu valorile filtrelor și pentru a preveni modificarea accidentală prin referință, în locurile unde se importă.

export const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const filtersInitialState = {
  status: statusFilters.all,
};