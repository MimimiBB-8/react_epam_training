import React from "react";
import '../../style/Button/button.css'
const Button: React.FC<{title:string}> = ({ title}) => (
    <>
        <button className={'baseButton'}>{title}</button>
    </>
);

export default Button;
