import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../app/actions'
import Dashboard from '../components/Dashboard'

const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(user){
      dispatch(getTransactions())
    }
  }, [auth])
 
  if(user) {
    return (
      <>
        <Dashboard />
      </>
    )
  } else {
    return (
    <div>Home</div>
  )
  }
}

export default Home