import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.to} className={props.className}>{props.texto}</Link>
  )
}

export default Button
