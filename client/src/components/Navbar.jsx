import React from 'react'
import style from '../styles/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={style.container}>
      <h2>Finance App</h2>
      <button>Iniciar sesión</button>
    </nav>
  )
}
