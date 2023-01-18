import React from "react";
import '../../style/BasicForm/formitem.css'

interface InputProps{
    title: string,
    type: string,
    placeholder: string,
    classname?: string
}
const FormItem = ({title, type, placeholder, classname}:InputProps) => (
    <>
        <label className={'input_title'}>
            {title}
            <input type={type} placeholder={placeholder} className={classname}/>
        </label>
    </>
);

export default FormItem;
