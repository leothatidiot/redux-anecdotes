import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes' // json-server

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (object) => {
  const response = await axios.post(baseUrl, object)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew }