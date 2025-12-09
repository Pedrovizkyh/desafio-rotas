import React from 'react'

const Article = (props) => {
  return (
    <article className={props.className}>
        <h3>{props.h3}</h3>
        <p>{props.texto}</p>
    </article>
  )
}

export default Article
