import { useDispatch, useSelector } from "react-redux";
import { voteTo } from "../reducers/anecdoteReducer";
import { voteAnecdote } from "../reducers/notificationReducer";


const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdote)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(voteTo(anecdote.id))
    dispatch(voteAnecdote(anecdote.content))
  }

  return (
    <>
      <h2>Anecdotes</h2>
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