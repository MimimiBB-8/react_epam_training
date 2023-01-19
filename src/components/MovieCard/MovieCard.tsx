import style from './MovieCard.module.scss'
import ImgSource from '../ImgSource/ImgSource'
interface MovieProps {
  title: string
  year: string
  genre: string
  urlImg: string
}
const MovieCard = ({ title, year, genre, urlImg }: MovieProps) => (
  <div className={style.movie_card}>
    <ImgSource alt={title} urlProp={urlImg} />
    <div className={style.movie_name}>
      <h4>{title}</h4>
      <p className={style.movie_year}>{year}</p>
    </div>
    <p className={style.movie_genre}>{genre}</p>
  </div>
)

export default MovieCard
