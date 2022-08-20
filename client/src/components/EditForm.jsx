import { useState } from 'react'
import style from '../styles/ABMForm.module.css'
import edit from '../assets/edit.svg'


const EditForm = ({ concept, value, type, date }) => {
  const [input, setInput] = useState({ concept, value, date })
  
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(newTransaction(input, navigate))
  }
  
  return (
    <div className={style.main}>
      <div className={style.container}>
        <figure className={style.figure}>
          <img className={style.img} src={edit} alt="Edit" />
        </figure>

        <form onSubmit={handleSubmit} className={style.form}>
          <h2>Editar transación</h2>
      
          <input
            name='concept' value={input.concept} onChange={handleChange} className={style.input} type="text" autoComplete='off'
          />

          <input
            name='value' value={input.value} onChange={handleValue} className={style.input} type="number" placeholder="Valor"
          />
          
          <input className={style.inputDisabled} type='text' value={type} disabled />

          <input
            name='date' value={input.date} onChange={handleChange} className={style.input} type="date" placeholder="Fecha"
          />
          
          <button className={style.btn} type='submit'>Editar</button>

        </form>
      </div>
    </div>
  )
}

export default EditForm