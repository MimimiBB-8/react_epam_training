import style from './Button.module.scss'
import React from 'react'
interface ButtonProps {
  classname?: string
  title?: string
  onclick?:()=>void
}

function Button ({classname = 'base_button', title, onclick}:ButtonProps) {
  return (
    <>
      <button className={`${style[classname]}`} onClick={onclick}>{title}</button>
    </>
    )

}

export default Button
