import style from './Formitem.module.scss'

interface ItemProps {
    title: string,
    type: string,
    placeholder: string
}

const FormItem = ({title, type, placeholder}: ItemProps) => (
    <>
        <label className={style.input_title}>
            {title}
            <input type={type} placeholder={placeholder}/>
        </label>
    </>
);

export default FormItem;
