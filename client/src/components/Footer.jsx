import React from 'react'
import style from '../styles/Footer.module.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>Creado por Santiago Trabucco</p>
      <div className={style.links}>
        <a href='https://github.com/Sandotcom' target="_blank" rel="noreferrer noopener">
          <img src={github} alt='github'/>
        </a>
        <a href='https://www.linkedin.com/in/santiagotrabucco/' target="_blank" rel="noreferrer noopener">
          <img src={linkedin} alt='linkedin' />
        </a>
      </div>
    </div>
  )
}

export default Footer