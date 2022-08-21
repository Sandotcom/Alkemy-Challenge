import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../app/actions'
import Dashboard from '../components/Dashboard'
import Landing from '../components/Landing'

const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const auth = useSelector(state => state.auth)
  const [isModify, setIsModify] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(user){
      dispatch(getTransactions())
    }
    // eslint-disable-next-line
  }, [auth, isModify])
  
  if(user) {
    return (
      <>
        <Dashboard setIsModify={setIsModify} />
      </>
    )
  } else {
    return (
    <>
      <Landing />
    </>
  )
  }
}

export default Home