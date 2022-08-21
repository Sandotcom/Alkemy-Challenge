import React from 'react'
import style from '../styles/Landing.module.css'
import finance from '../assets/finance_app.svg'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    navigate('/auth', { state: true })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    navigate('/auth', { state: false })
  }

  return (
    <div className={style.main}>
      <div className={style.container}>

        <figure className={style.figure}>
          <img className={style.img} src={finance} alt="Finance App" />
        </figure>

        <div className={style.welcome}>
          <h1>Bienvenido a Finance App</h1>
          <h3>Comenzá a administrar tus finanzas!</h3>
          <button className={style.btn} onClick={handleSignIn}>Iniciá sesión</button>
          <p>o</p>
          <button className={style.btn} onClick={handleSignUp}>Registrate</button>
          <p>Creado por Santiago Trabucco</p>
        </div>
      </div>
    </div>
  )
}

export default Landing