import { useDispatch, useSelector } from "react-redux";
import { voteTo } from "../reducers/anecdoteReducer";
import { setNotification, removeNotification } from "../reducers/notificationReducer";
import Filter from "./Filter";

const AnecdoteList = () => {
  const anecdotesToShow = useSelector(state => state.anecdotesToShow)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(voteTo(anecdote.id))

    dispatch(setNotification(`voted "${anecdote.content}"`))
    setInterval(() => {
      dispatch(removeNotification())
    }, 5000);
  }

  return (
    <>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotesToShow.map(anecdote =>
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