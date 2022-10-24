import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers:{
    voteTo(state, action) {
      const id = action.payload
      const anecToChange = state.find(anec => anec.id === id)
      const changedAnec = {
        ...anecToChange, votes: anecToChange.votes + 1
      }
      return state.map(anec =>
        anec.id !== id ? anec : changedAnec
      ).sort((a, b) => {
        if (a.votes < b.votes) return 1
        else if (a.votes > b.votes) return -1
        else return 0
      })
    },
    createAnecdote(state, action) {
      const getId = () => (100000 * Math.random()).toFixed(0)
      const newAnecContent = action.payload
      const newAnecObject = {
        id: getId(),
        content: newAnecContent,
        votes: 0
      }
      anecdoteService.createNew(newAnecObject)
      state.push(newAnecObject)
    },
    setAnecdotes(state, action) {
      const newState = action.payload
      return newState
    }
  }
})

export const { voteTo, createAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer