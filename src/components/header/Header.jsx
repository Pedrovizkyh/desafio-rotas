import React from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.mainHeader}>
            <img src="./src/assets/coracao.png" alt="Imagem de um coração" />
            <Link to='/' className={s.links}>Médicos & Dentistas</Link>
        </div>
        <nav>
            <Link to='/' className={s.linkHome}>Home</Link>
            <Link to='/seja-voluntario' className={s.linkVoluntario}>Seja Voluntário</Link>
        </nav>
    </header>
  )
}

export default Header
