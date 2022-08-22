import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import svg from "../assets/authentication.svg";
import style from "../styles/AuthForm.module.css";
import { signIn, signUp } from "../app/actions";
import { useNavigate, useLocation } from "react-router-dom";
import { validateName, validateEmail, validatePassword, validateConfirmPassword, validateSignIn, validateSignUp } from './validateForm'

const initialState = { name: '', email: '', password: '', confirmPassword: ''}

const AuthForm = () => {
  const [isUser, setIsUser] = useState(true);
  const [input, setInput] = useState(initialState)
  const [error, setError] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    state === null && setIsUser(false)
  }, [])

  const handleUser = () => setIsUser((prevIsUser) => !prevIsUser);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value})
  }

  const handleNameError = (e) => {
    let hasError = validateName({...input, [e.target.name]: e.target.value})
    if(hasError !== undefined){
      setError({
        ...error,
        name: hasError
      })
    } else {
      delete error.name
      setError({...error})
    }
  }

  const handleEmailError = (e) => {
    let hasError = validateEmail({...input, [e.target.name]: e.target.value})
    if(hasError !== undefined){
      setError({
        ...error,
        email: hasError
      })
    } else {
      delete error.email
      setError({...error})
    }
  }

  const handlePasswordError = (e) => {
    let hasError = validatePassword({...input, [e.target.name]: e.target.value})
    if(hasError !== undefined){
      setError({
        ...error,
        password: hasError
      })
    } else {
      delete error.password
      setError({...error})
    }
  }

  const handleConfirmPasswordError = (e) => {
    let hasError = validateConfirmPassword({...input, [e.target.name]: e.target.value})
    if(hasError !== undefined){
      setError({
        ...error,
        confirmPassword: hasError
      })
    } else {
      delete error.confirmPassword
      setError({...error})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isUser){
      let hasError = validateSignIn(input)
      setError(hasError)
    } else {
      let hasError = validateSignUp(input)
      setError(hasError)
    }

    if(Object.keys(error).length === 0){
      if(isUser){
        dispatch(signIn(input, navigate))
      } else {
        dispatch(signUp(input, navigate))
      }
    }
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <figure className={style.figure}>
          <img className={style.img} src={svg} alt="Finance App" />
        </figure>

        <form className={style.form}>
          <h2>{isUser ? "Iniciar sesión" : "Registrate"}</h2>
          
          {!isUser && (
            <div className={style.inputContainer}>
              <input 
                name='name' onChange={handleChange} onBlur={handleNameError} className={error.name ? style.inputDanger : style.input} type="text" placeholder="Nombre" autoComplete="given-name"
              />
              {error.name && <p className={style.pDanger}>{error.name}</p>}
            </div>
          )}

          <div className={style.inputContainer}>
          <input
            name='email' onChange={handleChange} onBlur={handleEmailError} className={error.email ? style.inputDanger : style.input} type="email" placeholder="Email" autoComplete="email"
          />
          {error.email && <p className={style.pDanger}>{error.email}</p>}
          </div>
          
          <div className={style.inputContainer}>
          <input
            name='password' onChange={handleChange} onBlur={handlePasswordError} className={error.password ? style.inputDanger : style.input} type="password" placeholder="Contraseña" autoComplete={isUser ? "current-password" : "new-password"}
          />
          {error.password && <p className={style.pDanger}>{error.password}</p>}
          </div>

          {!isUser && (
            <div className={style.inputContainer}>
              <input
              name='confirmPassword' onChange={handleChange} onBlur={handleConfirmPasswordError} className={error.confirmPassword ? style.inputDanger : style.input} type="password" placeholder="Confirmar contraseña" autoComplete="new-password"
              />
            {error.confirmPassword && <p className={style.pDanger}>{error.confirmPassword}</p>}
            </div>
          )}


          <p className={style.p} onClick={handleUser}>
            {isUser
              ? "¿No tenés cuenta? ¡Registrate!"
              : "¿Ya tenés cuenta? Inicía sesión"}
          </p>
          

          <button type="submit" onClick={handleSubmit} className={style.btn} 
            disabled={input === initialState || !input.password || !input.email || (!isUser && !input.name) || (!isUser && !input.confirmPassword) || error.email || error.password || (!isUser && error.name) || (!isUser && error.confirmPassword)}>
            {isUser ? "Iniciar sesión" : "Registrate"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default AuthForm;
