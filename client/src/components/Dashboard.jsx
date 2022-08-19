import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../styles/Dashboard.module.css'

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const transactions = useSelector(state => state.transactions)
  const balance = useSelector(state => state.balance)

  const handleClick = () => {
    console.log('Modificar')
  }

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
          <table className={style.transactions}>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.slice(0, 10).map((e, i) => (
                <tr className={style.data} key={i}>
                  <td>{e.concept}</td>
                  <td>{e.type}</td>
                  <td className={e.type === 'Ingreso' ? style.success : style.danger}>{e.type === 'Ingreso' ? e.value : `-${e.value}`}</td>
                  <td>{e.date}</td>
                  <td onClick={handleClick}>Modificar</td>
                  <td onClick={handleClick}>Eliminar</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard