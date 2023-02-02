import style from './Imgsource.module.scss'
import styles from '../MovieCard/MovieCard.module.scss'
interface ImgProps {
  alt?: string
  urlProp?: string
}

const ImgSource = ({ alt, urlProp }: ImgProps) => (
  <>
    <img className={`${style.poster} ${styles.poster}`} src={urlProp} alt={alt} />
  </>
)

export default ImgSource
