import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import style from './Portal.module.scss'
const modalRootElement = document.getElementById('react-modals') as HTMLElement

interface portalProps {
  children?: React.ReactNode
}
const Portal = ({ children }: portalProps) => {
  const elem = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    modalRootElement?.appendChild(elem)
    return () => {
      modalRootElement?.removeChild(elem)
    }
  })
  return ReactDOM.createPortal(<div className={style.window_wrapper}>{children} </div>, elem)
}

export default Portal
