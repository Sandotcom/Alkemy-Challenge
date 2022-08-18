import { useState } from "react";
import { useDispatch } from 'react-redux'
import finance from "../assets/finance_app.svg";
import style from "../styles/Form.module.css";
import { signIn, signUp } from "../app/actions";
import { useNavigate } from "react-router-dom";

const initialState = { name: '', email: '', password: '', confirmPassword: ''}

const Form = () => {
  const [isUser, setIsUser] = useState(true);
  const [input, setInput] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUser = () => setIsUser((prevIsUser) => !prevIsUser);

  const handleSubmit = () => {
    console.log(input)
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value})
  }

  const handleClick = (e) => {
    e.preventDefault()
    if(isUser){
      dispatch(signIn(input, navigate))
    } else {
      dispatch(signUp(input, navigate))
    }
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <figure className={style.figure}>
          <img className={style.img} src={finance} alt="Finance App" />
        </figure>

        <form onSubmit={handleSubmit} className={style.form}>
          <h2>{isUser ? "Iniciar sesión" : "Registrate"}</h2>
          {!isUser && (
            <input 
              name='name' onChange={handleChange} className={style.input} type="text" placeholder="Nombre" autoComplete="given-name"
            />
          )}

          <input
            name='email' onChange={handleChange} className={style.input} type="email" placeholder="Email" autoComplete="email"
          />

          <input
            name='password' onChange={handleChange} className={style.input} type="password" placeholder="Contraseña" autoComplete={isUser ? "current-password" : "new-password"}
          />

          {!isUser && (
            <input
            name='confirmPassword' onChange={handleChange} className={style.input} type="password" placeholder="Confirmar contraseña" autoComplete="new-password"
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

export default Form;
