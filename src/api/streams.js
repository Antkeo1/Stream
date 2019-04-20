import axios from 'axios'

// backend url
export default axios.create({
  baseURL: 'http://localhost:3001'
})
