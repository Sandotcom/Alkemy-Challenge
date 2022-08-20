import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import style from '../styles/Dashboard.module.css'
import { deleteTransaction } from '../app/actions'

const Dashboard = ({ setIsModify }) => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const transactions = useSelector(state => state.transactions)
  const balance = useSelector(state => state.balance)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate('/abm')
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    dispatch(deleteTransaction(id, setIsModify))
  }

  if(transactions.length > 0) {
    return (
      <div className={style.main}>
        <div className={style.container}>
  
          <div className={style.header}>
            <h2>Hola, {user.result.name}!</h2>
            <Link to='/abm'>
              <button className={style.btn}>Nueva Transación</button>
            </Link>
          </div>
  
          <div className={style.stats}>
            <div className={style.stat}>
              <h3>Ingresos Totales</h3>
              <h1>${balance.ingresos}</h1>  
            </div>
            <div className={style.stat}>
              <h3>Egresos Totales</h3>
              <h1>${balance.egresos}</h1>
            </div>
            <div className={style.stat}>
              <h3>Balance Total</h3>
              <h1>${balance.total}</h1>
            </div>
          </div>

          <div className={style.header}>
            <h2>Transaciones</h2>
          </div>
  
          <div>
            <ul>            
              <li className={style.transactions}>
                <b>Concepto</b>
                <b>Tipo</b>
                <b>Valor</b>
                <b>Fecha</b>
              </li>
              {transactions?.slice(0, 10).map((el, i) => (
                <li className={style.data} key={i}>
                  <p>{el.concept}</p>
                  <p>{el.type}</p>
                  <p className={el.type === 'Ingreso' ? style.success : style.danger}>{el.type === 'Ingreso' ? el.value : `-${el.value}`}</p>
                  <p>{el.date}</p>
                  <p className={style.edit} onClick={handleEdit}>Editar</p>
                  <p onClick={(e) => handleDelete(e, el.id)} className={style.delet}>Eliminar</p>
                </li>
              ))}
            </ul>
          </div>
  
        </div>
      </div>
    )
  } else {
    return (
      <div className={style.main}>
        <div className={style.container}>
  
          <div className={style.header}>
            <h2>Hola, {user.result.name}!</h2>
            <Link to='/abm'>
              <button className={style.btn}>Nueva Transación</button>
            </Link>
          </div>

          <div className={style.stats}>
            <div className={style.stat}>
              <h3>Ingresos Totales</h3>
              <h1>${balance.ingresos}</h1>  
            </div>
            <div className={style.stat}>
              <h3>Egresos Totales</h3>
              <h1>${balance.egresos}</h1>
            </div>
            <div className={style.stat}>
              <h3>Balance Total</h3>
              <h1>${balance.total}</h1>
            </div>
          </div>

          <div className={style.header}>
            <h2>Nada por aquí... creá tu primer transación!</h2>
          </div>
        </div>
      </div>
    )
  }

}

export default Dashboard