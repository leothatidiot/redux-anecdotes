import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addAnecdote(state, action) {
      const content = action.payload
      return 'add \'' + content + '\''
    }, 
    voteAnecdote(state, action) {
      const content = action.payload
      return 'voted \'' + content + '\''
    }
  }
})

export const { addAnecdote, voteAnecdote } = notificationSlice.actions
export default notificationSlice.reducer