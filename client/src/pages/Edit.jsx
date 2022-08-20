import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import EditForm from '../components/EditForm'
import { getTransaction } from '../app/actions'

const Edit = () => {
  const [loading, setLoading] = useState(false)
  const { state } = useLocation()
  const { concept, value, type, date } = useSelector(state => state.transaction)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    dispatch(getTransaction(state.id, setLoading))
  }, [dispatch, state.id])

  if(loading){
    return (
      <>
        <h2>Cargando</h2>
      </>
    )
  } else return (
    <>
      <EditForm concept={concept} value={value} type={type} date={date} />
    </>
  )
}

export default Edit