import { useState } from 'react'
import style from '../styles/ABMForm.module.css'
import calculator from '../assets/calculator.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { newTransaction } from '../app/actions'
import { validateConcept, validateValue, validateDate, validateTransaction  } from './validateForm'

const ABMForm = () => {
  const [type, setType] = useState('Ingreso')
  const [input, setInput] = useState({ concept: '', value: null, type: type, date: null })
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

  const handleSelect = (e) => {
    setType(e.target.value)
    setInput({
      ...input, type: e.target.value
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
      dispatch(newTransaction(input, navigate))
    }
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <figure className={style.figure}>
          <img className={style.img} src={calculator} alt="Calculator" />
        </figure>

        <form className={style.form}>
          <h2>Nueva transación</h2>
          
          <div className={style.inputContainer}>
            <input
              name='concept' onChange={handleChange} onBlur={handleConceptError} className={error.concept ? style.inputDanger : style.input} type="text" placeholder="Concepto" autoComplete='off'
            />
            {error.concept && <p className={style.pDanger}>{error.concept}</p>}
          </div>

          <div className={style.inputContainer}>
            <input
              name='value' onChange={handleValue} onBlur={handleValueError} className={error.value ? style.inputDanger : style.input} type="number" placeholder="Valor"
            />
            {error.value && <p className={style.pDanger}>{error.value}</p>}
          </div>

          <div className={style.inputContainer}>
            <select onChange={handleSelect} value={type} className={style.input}>
              <option value={'Ingreso'}>Ingreso</option>
              <option value={'Egreso'}>Egreso</option>
            </select>
          </div>
          
          <div className={style.inputContainer}>
            <input
              name='date' onChange={handleChange} onBlur={handleDateError} className={error.date ? style.inputDanger : style.input} type="date" placeholder="Fecha"
            />
            {error.date && <p className={style.pDanger}>{error.date}</p>}
          </div>

          <button onClick={handleSubmit} className={style.btn} type='submit'
            disabled={!input.concept || !input.value || !input.date || error.concept || error.value || error.date}>
              Agregar
            </button>

        </form>
      </div>
    </div>
  )
}

export default ABMForm