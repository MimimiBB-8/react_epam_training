import style from './Button.module.scss'
import React, {useState, useEffect} from 'react'
interface ButtonProps {
  classname?: string
  title?: string
  onClick?:()=>void
}

function Button ({classname = 'base_button' ,title, onClick}:ButtonProps) {

  return (
    <>
      <button className={`${style[classname]}`} onClick={onClick}>{title}</button>
    </>
    )

}

export default Button
