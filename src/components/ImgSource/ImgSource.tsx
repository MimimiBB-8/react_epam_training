import style from './Imgsource.module.scss'

interface ImgProps{
    alt?: string,
    urlProp?: string,
}

const ImgSource = ({alt, urlProp}:ImgProps) => (

    <>
        <img className={style.poster} src={urlProp} alt={alt}/>
    </>
);

export default ImgSource;
