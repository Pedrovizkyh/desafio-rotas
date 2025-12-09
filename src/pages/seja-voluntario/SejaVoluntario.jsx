import React from 'react'
import s from './sejaVoluntario.module.scss'
import Article from '../../components/article/Article';

const SejaVoluntario = () => {
  return (
    <main>
      <section className={s.mainVoluntario}>

        <div className={s.titulo}>
          <h1>Seja Voluntário</h1>
          <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        </div>

        <div className={s.articles}>
          <Article    
            h3='Impacto Direto'
            texto='Sua dedicação salva vidas e transforma comunidades'
            className={s.article}
          />
          <Article 
            h3='Crescimento Pessoal'
            texto='Desenvolva habilidades e cresça profissionalmente'
            className={s.article}
          />
          <Article 
            h3='Comunidade'
            texto='Faça parte de uma rede de profissionais comprometidos'
            className={s.article}
          />
        </div>
      </section>

      <section className={s.formularioVoluntario}>

        <div className= {s.formulario}>
          <h3>Inscrição para Voluntários</h3>

          <form action="" className={s.form}>
            <fieldset>
              <legend>Dados Pessoais</legend>
              <div className={s.nomeEmail}>
                <input type="text" placeholder='Seu Nome *' required className={s.nome}/>
                <input type="email" placeholder='Seu Email *' required/>
              </div>
              <input type="tel" placeholder='Seu Telefone *' required/>
            </fieldset>

            <fieldset className={s.mensagem}>
              <legend>Mensagem Adicional</legend>
              <textarea placeholder='Conte-nos porque você quer ser voluntario...'></textarea>
            </fieldset>

            <fieldset className={s.button}>
              <legend>Entraremos em contato para mais informações</legend>
              <button type="submit">Enviar Inscrição</button>
            </fieldset>
          </form>
        </div>
        
      </section>
    </main>
    
  )
}

export default SejaVoluntario
