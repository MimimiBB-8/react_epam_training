import style from './Formitem.module.scss'

interface ItemProps {
  id: string
  title: string
  type: string
  placeholder: string
  name?: string
  value?: any
  onchange?: (param: any) => void
}

const FormItem = ({ title, type, placeholder, value = '', onchange, id, name }: ItemProps) => {
  return (
    <>
      <label className={style.input_title}>
        {title}
        <input
          className={style.input_item}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          name={name}
        />
      </label>
    </>
  )
}
export default FormItem
