import style from './Button.module.scss'

interface ButtonProps {
    classname?: string,
    title: string
}

const Button = ({classname = style.base_button, title}: ButtonProps) => (
    <>
        <button className={classname}>{title}</button>
    </>
);

export default Button;
