import axios from 'axios'

const url = process.env.REACT_APP_API || 'http://localhost:3001'

const API = axios.create({ baseURL: url })

API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }

  return req;
})

export const signIn = (userData) => API.post(`/signIn`, userData)
export const signUp = (userData) => API.post(`/signup`, userData)

export const newTransaction = (transaction) => API.post('/transaction', transaction)
export const getTransactions = () => API.get('/transaction')