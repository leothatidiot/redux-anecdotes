import Notification from "./components/Notification"
import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"

// import { useDispatch } from "react-redux"
// import { useEffect } from "react"

// import anecdoteService from './services/anecdotes'
// import { setAnecdotes } from "./reducers/anecdoteReducer"
// import { setAnecdotesToShow } from "./reducers/filterReducer"

const App = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   anecdoteService.getAll().then(anecs => {
  //     dispatch(setAnecdotes(anecs))
  //     dispatch(setAnecdotesToShow(anecs))
  //   })
  // })

  return (
    <div>
      <Notification/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App