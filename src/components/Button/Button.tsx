import React from "react";
import './Button.css'

interface ButtonProps {
    classname?: string,
    title: string
}
const Button = ({classname = 'base_button', title}:ButtonProps) => (
    <>
        <button className={classname} >{title}</button>
    </>
);

export default Button;
