import { useDispatch, useSelector } from "react-redux";
import { setAnecdotesToShow } from "../reducers/filterReducer";

const Filter = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const filtered = anecdotes.filter(anec => 
      anec.content.includes(event.target.value)
    )
    dispatch(setAnecdotesToShow(filtered))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter