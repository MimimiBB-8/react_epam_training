import style from './Button.module.scss'

interface ButtonProps {
  classname?: string
  title?: string
  onClick?: (param: any) => void
  type?: any,
  child? : any;
}

function Button({ classname = 'base_button', title, onClick, type , child}: ButtonProps) {
  return (
    <>
      <button className={`${style[classname]}`} onClick={onClick} type={type}>
        {title}
      </button>
    </>
  )
}

export default Button
