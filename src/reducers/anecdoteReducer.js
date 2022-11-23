import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers:{
  //   voteTo(state, action) {
  //     const id = action.payload
  //     const anecToChange = state.find(anec => anec.id === id)
  //     const changedAnec = {
  //       ...anecToChange, votes: anecToChange.votes + 1
  //     }
  //     return state.map(anec =>
  //       anec.id !== id ? anec : changedAnec
  //     ).sort((a, b) => {
  //       if (a.votes < b.votes) return 1
  //       else if (a.votes > b.votes) return -1
  //       else return 0
  //     })
  //   },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      const newState = action.payload
      return newState
    },
    setAnecdote(state, action) {
      const id = action.payload.id
      const changedAnec = action.payload
      return state.map(anec => 
        anec.id === id ? changedAnec : anec
      ).sort((a, b) => { // 点赞后排序 仅在 store 中排序 不在后端数据库排序
        if (a.votes < b.votes) return 1
        else if (a.votes > b.votes) return -1
        else return 0
      })
    }
  }
})

export const { appendAnecdote, setAnecdotes, setAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const getId = () => (100000 * Math.random()).toFixed(0)
    const newAnecContent = content
    const newAnecObject = {
      id: getId(),
      content: newAnecContent,
      votes:0
    }
    const CreateAnecRes = await anecdoteService.createNew(newAnecObject)
    dispatch(appendAnecdote(CreateAnecRes))
  }
}

export const voteTo = (id) => {
  return async (dispatch, getState) => {
    const anecToVote = getState().anecdotes.find(anec => anec.id === id)
    const votedAnec = { ...anecToVote, votes: anecToVote.votes+1 }
    const updateAnecRes = await anecdoteService.update(id, votedAnec)
    dispatch(setAnecdote(updateAnecRes))
  }
}

export default anecdoteSlice.reducer