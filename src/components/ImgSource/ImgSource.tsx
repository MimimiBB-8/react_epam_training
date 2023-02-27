import style from './Imgsource.module.scss'
import styles from '../MovieCard/MovieCard.module.scss'
interface ImgProps {
  alt?: string
  urlProp?: string
  onclick?: ()=>void
}

const ImgSource = ({ alt, urlProp, onclick }: ImgProps) => (
  <>
    <img className={`${style.poster} ${styles.poster} img_source`} src={urlProp} alt={alt}  onClick={onclick}/>
  </>
)

export default ImgSource
