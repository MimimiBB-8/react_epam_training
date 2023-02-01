import style from './Button.module.scss'

interface ButtonProps {
  classname?: string
  title?: string
  onClick?: (param: any) => void
}

function Button({ classname = 'base_button', title, onClick }: ButtonProps) {
  return (
    <>
      <button className={`${style[classname]}`} onClick={onClick}>{title}</button>
    </>
  )
}

export default Button
