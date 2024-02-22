import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

// Extindem store-ul pentru a adăuga devTools:
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
