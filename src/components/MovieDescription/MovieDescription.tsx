import { useContext } from 'react'
import style from './Moviedescription.module.scss'
import ImgSource from '../ImgSource/ImgSource'
import { information } from '../../data/data'
import { Context } from '../Context/Context'

type Movie = {
  id?: number,
  title?: string,
  year?: number,
  rating?: number,
  time: number,
  genre?: string,
  description?: string
  url?: any
};
const MovieDescription = () => {

  const value = useContext(Context)
  console.log(value.itemID)
  const movie : Movie = {time : 0};

  information.map((item)=>{
    if(item.id == value.itemID){
       Object.assign(movie, item)
    }
  })

  function getTimeFromMins(mins: number) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours}h   ${minutes}min`;
  };

  return (
    <div className={style.description_wrapper}>
      <ImgSource urlProp={movie.url} />
      <div className={style.description_movie}>
        <div className={style.group_name_rating}>
          <h2>{movie.title}</h2>
          <div className={style.circle_paragraph}>
            <p className={style.rating}>{movie.rating}</p>
          </div>
        </div>
        <p className={style.description_genre}>{movie.genre}</p>
        <div className={style.group_year_time}>
          <h5 className={style.description_year}>{movie.year}</h5>
          <h5 className={style.description_time}>{getTimeFromMins(movie.time)}</h5>
        </div>
        <p className={style.description}>
          {movie.description}
        </p>
      </div>
    </div>
  )
}

export default MovieDescription
