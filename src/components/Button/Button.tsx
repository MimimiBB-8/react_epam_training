import style from './Button.module.scss'

interface ButtonProps {
  classname?: string
  title?: string
  onClick?: (param: any) => void
  type?: any
}

function Button({ classname = 'button', title, onClick, type}: ButtonProps) {
  return (
    <>
      <button className={`${style.button} ${style[classname]}`} onClick={onClick} type={type}>
        {title}
      </button>
    </>
  )
}

export default Button
