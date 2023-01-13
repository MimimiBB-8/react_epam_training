import React from "react";
import '../../style/ImgSource/imgsource.css'
const logo = require('../../img/pulp_fiction.jpg');

const ImgSource = () => (
    <>
        <img className={'poster'} src={logo}/>
    </>
);

export default ImgSource;
