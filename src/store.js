import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer, { setAnecdotesToShow } from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    anecdotesToShow: filterReducer
  }
})

anecdoteService.getAll().then(anecdotes => {
  store.dispatch(setAnecdotes(anecdotes))
  store.dispatch(setAnecdotesToShow(anecdotes))
})

export default store