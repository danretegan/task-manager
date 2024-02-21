import { statusFilters } from "./constants";

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
    status: statusFilters.all,
  },
};

// Folosim initialState ca valoare implicită pentru state:
export const rootReducer = (state = initialState, action) => {
  // Reducer-ul distinge acțiunile după valoarea proprietății type:
  switch (action.type) {
    // În funcție de tipul acțiunii, se va executa o logică diferită.
    case "tasks/addTask": {
      /**Se returnează un nou obiect de stare care include toate datele din starea existentă (...state) și o nouă matrice de sarcini care păstrează sarcinile existente și adaugă o sarcină nou creată. */
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    default:
      // Fiecare reducer primește toate acțiunile trimise la store.
      // Dacă reducer-ul nu ar trebui să proceseze un anumit tip de acțiune,
      // trebuie să se returneze starea existentă, neschimbată:
      return state;
  }
};

/**STAREA INIȚIALĂ
În momentul inițializării unui store (acțiunea `@@INIT` din Redux DevTools), tuturor reducer-ilor li se trec `undefined` ca valoare pentru state. Prin urmare, pentru fiecare reducer trebuie furnizat o valoare implicită pentru parametrul `state` care va deveni starea inițială a aplicației. */
