import React from "react";
import '../../style/ImgSource/imgsource.css'
interface ImgProps{
    alt?: string,
    urlProp?: string,
}

const ImgSource = ({alt, urlProp}:ImgProps) => (

    <>

        <img className={'poster'} src={urlProp} alt={alt}/>
    </>
);

export default ImgSource;
