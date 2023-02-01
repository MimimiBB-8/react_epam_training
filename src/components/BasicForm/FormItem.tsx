import style from './Formitem.module.scss'

interface ItemProps {
  title: string
  type: string
  placeholder: string,
  value?: any
  onchange?: (param:any)=>void
}

const FormItem = ({ title, type, placeholder, value = '', onchange }: ItemProps) => {

  return (
    <>
      <label className={style.input_title}>
        {title}
        <input className={style.input_item} type={type} placeholder={placeholder} defaultValue={value} onChange={onchange}/>
      </label>
    </>
  )
}
export default FormItem
