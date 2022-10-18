import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./anecdoteReducer";

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setAnecdotesToShow(state, action) {
      return action.payload
    }
  }
})

export const { setAnecdotesToShow } = filterSlice.actions
export default filterSlice.reducer