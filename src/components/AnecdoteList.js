import { useDispatch, useSelector } from "react-redux";
import { voteTo } from "../reducers/anecdoteReducer";
import { setNotificationWithTimeout } from "../reducers/notificationReducer";
import Filter from "./Filter";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filterString = useSelector(state => state.filterString)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(voteTo(anecdote.id))
    dispatch(setNotificationWithTimeout(`you voted '${anecdote.content}'`, 10))
  }

  return (
    <>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.filter(anec => {
        return anec.content.includes(filterString)
      }).map(filteredAnec => { return (
        <div key={filteredAnec.id}>
          <div>
            {filteredAnec.content}
          </div>
          <div>
            has {filteredAnec.votes}
            <button onClick={() => vote(filteredAnec)}>vote</button>
          </div>
        </div>  
      )})}
    </>
  )
}

export default AnecdoteList