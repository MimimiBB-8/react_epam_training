import style from './Formitem.module.scss'

interface ItemProps {
  title: string
  type: string
  placeholder: string,
  value?: string
}

const FormItem = ({ title, type, placeholder, value }: ItemProps) => (
  <>
    <label className={style.input_title}>
      {title}
      <input  type={type} placeholder={placeholder} value={value}/>
    </label>
  </>
)

export default FormItem
