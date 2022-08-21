import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import svg from "../assets/authentication.svg";
import style from "../styles/AuthForm.module.css";
import { signIn, signUp } from "../app/actions";
import { useNavigate, useLocation } from "react-router-dom";
import { validateName, validateEmail, validatePassword, validateConfirmPassword, validateSignIn, validateSignUp } from './validateForm'

const initialState = { name: '', email: '', password: '', confirmPassword: ''}

const AuthForm = () => {
  const { state } = useLocation()
  const [isUser, setIsUser] = useState(true);
  const [input, setInput] = useState(initialState)
  const [error, setError] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const handleClick = (e) => {
    e.preventDefault()
    if(isUser){
      let hasError = validateSignIn(input)
      setError(hasError)
    } else {
      let hasError = validateSignUp(input)
      setError(hasError)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

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

        <form onSubmit={handleSubmit} className={style.form}>
          <h2>{isUser ? "Iniciar sesión" : "Registrate"}</h2>
          {!isUser && (
            <input 
              name='name' onChange={handleChange} onBlur={handleNameError} className={style.input} type="text" placeholder="Nombre" autoComplete="given-name"
            />
          )}

          <input
            name='email' onChange={handleChange} onBlur={handleEmailError} className={style.input} type="email" placeholder="Email" autoComplete="email"
          />

          <input
            name='password' onChange={handleChange} onBlur={handlePasswordError} className={style.input} type="password" placeholder="Contraseña" autoComplete={isUser ? "current-password" : "new-password"}
          />

          {!isUser && (
            <input
            name='confirmPassword' onChange={handleChange} onBlur={handleConfirmPasswordError} className={style.input} type="password" placeholder="Confirmar contraseña" autoComplete="new-password"
            />
          )}

          <button onClick={handleClick} className={style.btn} type="submit">
            {isUser ? "Iniciar sesión" : "Registrate"}
          </button>

          <p className={style.p} onClick={handleUser}>
            {isUser
              ? "¿No tenés cuenta? ¡Registrate!"
              : "¿Ya tenés cuenta? Inicía sesión"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
