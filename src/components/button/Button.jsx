import React from 'react'
import { Link } from 'react-router-dom'
import s from './button.module.scss';

const Button = (props) => {
  return (
    <Link to={props.to} className={props.className}>{props.texto}</Link>
  )
}

export default Button
