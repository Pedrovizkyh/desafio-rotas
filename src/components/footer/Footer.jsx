import React from 'react'
import { Link } from 'react-router-dom'
import s from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={s.footer}>
        <section className={s.footerCima}>
            <section className={s.footerMain}>
                <div className={s.titulo}>
                    <img src="./src/assets/coracao.png" alt="Imagem de um coração" />
                    <Link to='/' className={s.links}><h1>Médicos & Dentistas</h1></Link>
                </div>
                <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
            </section>
            <section className={s.contato}>
                <h3>Contato</h3>
                <div className={s.linkRedes}>
                    <div className={s.card}>
                        <img src="./src/assets/email.png" alt="Icone de um email" />
                        <p>contato@medico-dentista.org</p>
                    </div>
                    <div className={s.card}>
                        <img src="./src/assets/telefone.png" alt="Icone de um telefone" />
                        <p>(11) 3000-0000</p>
                    </div>
                    <div className={s.card}>
                        <img src="./src/assets/mapa.png" alt="Icone de um mapa" />
                        <p>São Paulo, Brasil</p>
                    </div>
                </div>
            </section>
            <section className={s.social}>
                <div className={s.linkRedes}>
                    <h3>Redes Sociais </h3>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">LinkedIn</a>
                </div>
            </section>
        </section>

        <div className={s.legenda}>
            <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer
