import { createSlice } from "@reduxjs/toolkit";
import { filtersInitialState } from "../constants";

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Exportam generatorul de actiune si reducer-ul:
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
