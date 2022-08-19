import { useState } from 'react'
import style from '../styles/ABMForm.module.css'
import calculator from '../assets/calculator.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { newTransaction } from '../app/actions'


const ABMForm = () => {
  const [type, setType] = useState('Ingreso')
  const [input, setInput] = useState({ concept: '', value: null, type: type, date: null })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput({
      ...input, [e.target.name]: e.target.value
    })
  }

  const handleValue = (e) => {    
    setInput({
      ...input, [e.target.name]: parseInt(e.target.value)
    })
  }

  const handleSelect = (e) => {
    setType(e.target.value)
    setInput({
      ...input, type: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(newTransaction(input, navigate))
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <figure className={style.figure}>
          <img className={style.img} src={calculator} alt="Calculator" />
        </figure>

        <form onSubmit={handleSubmit} className={style.form}>
          <h2>Nueva transación</h2>
      
          <input
            name='concept' onChange={handleChange} className={style.input} type="text" placeholder="Concepto" autoComplete='off'
          />

          <input
            name='value' onChange={handleValue} className={style.input} type="number" placeholder="Valor"
          />
          
          <select onChange={handleSelect} value={type} className={style.input}>
            <option value={'Ingreso'}>Ingreso</option>
            <option value={'Egreso'}>Egreso</option>
          </select>

          <input
            name='date' onChange={handleChange} className={style.input} type="date" placeholder="Fecha"
          />
          
          <button className={style.btn} type='submit'>Agregar</button>

        </form>
      </div>
    </div>
  )
}

export default ABMForm