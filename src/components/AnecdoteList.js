import { useDispatch, useSelector } from "react-redux";
import { voteTo } from "../reducers/anecdoteReducer";


const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdote)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteTo(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList