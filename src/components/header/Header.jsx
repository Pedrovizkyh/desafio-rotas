import React from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'
import Button from '../button/Button'
import Coracao from '../../assets/coracao.png'


const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.mainHeader}>
            <img src={Coracao} alt="Imagem de um coração" />
            <Link to='/' className={s.links}><h1>Médicos & Dentistas</h1></Link>
        </div>
        <nav>
          <Link to='/' className={s.linkHome}>Home</Link>
          <Button to='/seja-voluntario' className={s.linkVoluntario} texto='Seja Voluntário' />
        </nav>
    </header>
  )
}

export default Header
