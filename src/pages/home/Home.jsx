import React from 'react';
import s from './home.module.scss';
import Button from '../../components/button/Button';

const Home = () => {
  return (
    <main className={s.main}>
      <section>
        <div className={s.mainTitle}>
          <div className={s.icon}>
            <img
              src="./src/assets/estetoscopio.png"
              alt="icone de um estetoscópio"
            />
            <p>Saúde para todos</p>
          </div>
        
          <h1>Saúde e cuidado sem barreiras</h1>
        
          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>
          <div className={s.buttons}>
            <Button
              to='/seja-voluntario'
              className={s.linkVoluntario}
              texto='Seja Voluntário'
            />
            <Button
              to='/seja-voluntario'
              className={s.linkAjuda}
              texto='Como Ajudar'
            />
          </div>
        </div>
        
        <img
          src="./src/assets/medico.png"
          alt="Medico feito por I.A"
          className={s.medico}
        />
      </section>
    </main>
  );
};

export default Home;