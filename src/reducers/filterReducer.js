import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterString(state, action) {
      return action.payload
    }
  }
})

export const { setFilterString } = filterSlice.actions
export default filterSlice.reducer