import React from 'react';
import s from './home.module.scss';
import Button from '../../components/button/Button';
import Article from '../../components/article/Article';

import Estetoscopio from '../../assets/estetoscopio.png'

const Home = () => {
  return (
    <main className={s.main}>
      <section className={s.firstMain}>
        <div className={s.mainTitle}>
          <div className={s.icon}>
            <img
              src={Estetoscopio}
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
      </section>

      <section className={s.missao}>
        <h2>Nossa Missão</h2>
        <p>Transformar vidas através do acesso universal a saúde de qualidade</p>
        
        <div className={s.articles}>
          <Article
            h3='Acesso Equitativo'
            texto='Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.'
            className={s.article}
          />
          <Article
            h3='Comunidade Forte'
            texto='Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.'
            className={s.article}
          />
          <Article
            h3='Bem-estar Total'
            texto='Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.'
            className={s.article}
          />
        </div>
      </section>

      <section className={s.impacto}>
        <h2>Nosso Impacto</h2>
        <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>

        <div className={s.articles}>
          <Article
            h3='2,500+'
            texto='Pessoas Atendidas'
            className={s.article}
          />
          <Article
            h3='150+'
            texto='Profissionais Voluntários'
            className={s.article}
          />
          <Article
            h3='98%'
            texto='Satisfação dos Pacientes'
            className={s.article}
          />
          <Article
            h3='5+'
            texto='Anos de Dedicação'
            className={s.article}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;