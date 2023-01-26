import style from './Moviedescription.module.scss'
import ImgSource from '../ImgSource/ImgSource'
import {information} from '../../data/data'

interface MovieProps {
  title?: string
  year?: number
  genre?: number
  urlImg?: string
  description?: string
}

const MovieDescription = ({ title, year, genre, urlImg }: MovieProps) => (
  <div className={style.description_wrapper}>
    <ImgSource urlProp={information[0].url} />
    <div className={style.description_movie}>
      <div className={style.group_name_rating}>
        <h2>{information[0].title}</h2>
        <div className={style.circle_paragraph}>
          <p className={style.rating}>8.9</p>
        </div>
      </div>
      <p className={style.description_genre}>Genre</p>
      <div className={style.group_year_time}>
        <h5 className={style.description_year}>Year</h5>
        <h5 className={style.description_time}>Time</h5>
      </div>
      <p className={style.description}>
        Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are
        out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving
        Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days
        later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging
        boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated
        people are woven together comprising of a series of funny, bizarre and uncalled-for
        incidents.—Soumitra
      </p>
    </div>
  </div>
)

export default MovieDescription
