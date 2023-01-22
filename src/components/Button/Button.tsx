import style from './Button.module.scss'
import React from 'react'
interface ButtonProps {
  classname?: string
  title?: string
}

function Button ({classname = 'base_button', title}:ButtonProps) {
  return (
    <>
      <button className={`${style[classname]}`}>{title}</button>
    </>
    )

}

export default Button
