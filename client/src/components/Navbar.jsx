import React, { useEffect, useState } from 'react'
import style from '../styles/Navbar.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')))
    // eslint-disable-next-line
  }, [location])

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    setUser(null)
  }

  return (
    <nav className={style.container}>
      <Link to='/'><h2 className={style.h2}>Finance App</h2></Link>
      
      {user ? 
        (<button className={style.btn} onClick={logout}>Cerrar sesión</button>)
        : (<Link to='/auth'><button className={style.btn}>Iniciar sesión</button></Link>)}
    </nav>
  )
}

export default Navbar