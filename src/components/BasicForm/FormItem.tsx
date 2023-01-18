import React from "react";
import './Formitem.css'

const FormItem: React.FC<{ title: string, type: string, placeholder: string }> = ({title, type, placeholder}) => (
    <>
        <label className={'input_title'}>
            {title}
            <input type={type} placeholder={placeholder}/>
        </label>
    </>
);

export default FormItem;
