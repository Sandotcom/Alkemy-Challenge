import { useState } from 'react'
import style from '../styles/ABMForm.module.css'
import edit from '../assets/edit.svg'
import { useDispatch } from 'react-redux'
import { putTransaction } from '../app/actions'
import { useNavigate } from 'react-router-dom'
import { validateConcept, validateValue, validateDate, validateTransaction  } from './validateForm'

const EditForm = ({ id, concept, value, type, date }) => {
  const [input, setInput] = useState({ concept, value, date })
  const [error, setError] = useState({})
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

  const handleConceptError = (e) => {
    let hasError = validateConcept({...input, [e.target.name]: e.target.value})
    if(hasError !== undefined){
      setError({
        ...error,
        concept: hasError
      })
    } else {
      delete error.concept
      setError({...error})
    }
  }

  const handleValueError = (e) => {
    let hasError = validateValue({...input, [e.target.name]: e.target.value})
    if(hasError !== undefined){
      setError({
        ...error,
        value: hasError
      })
    } else {
      delete error.value
      setError({...error})
    }
  }

  const handleDateError = (e) => {
    let hasError = validateDate({...input, [e.target.name]: e.target.value})
    if(hasError !== undefined){
      setError({
        ...error,
        date: hasError
      })
    } else {
      delete error.date
      setError({...error})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let hasError = validateTransaction(input)
    setError(hasError)

    if(Object.keys(error).length === 0){
      dispatch(putTransaction(id, input, navigate))
    }
  }
  
  return (
    <div className={style.main}>
      <div className={style.container}>
        <figure className={style.figure}>
          <img className={style.img} src={edit} alt="Edit" />
        </figure>

        <form className={style.form}>
          <h2>Editar transación</h2>

          <div className={style.inputContainer}>
            <input
              name='concept' value={input.concept} onChange={handleChange} onBlur={handleConceptError} className={error.concept ? style.inputDanger : style.input} type="text" autoComplete='off'
            />
            {error.concept && <p className={style.pDanger}>{error.concept}</p>}
          </div>

          <div className={style.inputContainer}>
            <input
              name='value' value={input.value} onChange={handleValue} onBlur={handleValueError} className={error.value ? style.inputDanger : style.input} type="number" placeholder="Valor"
            />
            {error.value && <p className={style.pDanger}>{error.value}</p>}
          </div>

          <div className={style.inputContainer}>
            <input className={style.inputDisabled} type='text' value={type} disabled />
          </div>

          <div className={style.inputContainer}>
            <input
              name='date' value={input.date} onChange={handleChange} onBlur={handleDateError} className={error.date ? style.inputDanger : style.input} type="date" placeholder="Fecha"
              />
              {error.date && <p className={style.pDanger}>{error.date}</p>}
          </div>
          
          <button className={style.btn} onClick={handleSubmit} type='submit'
            disabled={!input.concept || !input.value || !input.date || error.concept || error.value || error.date}>
            Editar
          </button>

        </form>
      </div>
    </div>
  )
}

export default EditForm