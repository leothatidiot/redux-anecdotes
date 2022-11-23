import { useDispatch, useSelector } from "react-redux";
import { voteTo } from "../reducers/anecdoteReducer";
import { setAnecdotesToShow } from "../reducers/filterReducer";
import { setNotificationWithTimeout } from "../reducers/notificationReducer";
import Filter from "./Filter";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const anecdotesToShow = useSelector(state => state.anecdotesToShow)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(voteTo(anecdote.id))
    dispatch(setAnecdotesToShow(anecdotes))

    dispatch(setNotificationWithTimeout(`you voted '${anecdote.content}'`, 10))
  }

  return (
    <>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList