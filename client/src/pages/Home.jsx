import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../app/actions'

const Home = () => {
  const transactions = useSelector(state => state.transactions)
  const user = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(user){
      dispatch(getTransactions())
    }
  }, [user])
  
  if(user) {
    return (
      <div><h2>{user.result.id}</h2></div>
    )
  } else {
    return (
    <div>Home</div>
  )
  }
}

export default Home