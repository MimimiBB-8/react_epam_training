import React, { DataHTMLAttributes, useContext} from 'react'
import style from './Moviedescription.module.scss'
import ImgSource from '../ImgSource/ImgSource'
import { information } from '../../data/data'
import { stateVisibleContext } from '../../context/StateVisibleContext'
import Button from '../Button/Button'

type Movie = {
  id?: number,
  title?: string,
  year?: string,
  rating?: number,
  time: number,
  genre?: string,
  description?: string
  url?: any
};
const MovieDescription = () => {

  const value = useContext(stateVisibleContext)
  const movie: Movie = { time: 0 }

  information.map((item) => {
    if (item.id == value.itemID) {
      Object.assign(movie, item)
    }
  })

  function getTimeFromMins(mins: number) {
    const hours = Math.trunc(mins / 60)
    const minutes = mins % 60
    return `${hours}h   ${minutes}min`
  }

  const handleOnClick = () => {
    if (value.toggleVisible) {
      value.toggleVisible(false)
    }
  }

  return (
    <div className={style.header_description}>
      <div className={style.logo_line}>
        <label className={style.logo}>
          <span>netflix</span>roulette
        </label>
        <Button classname={'return_search'} onClick={handleOnClick}/>
      </div>
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
            <h5 className={style.description_year}>{movie.year?.split('').slice(0,4)}</h5>
            <h5 className={style.description_time}>{getTimeFromMins(movie.time)}</h5>
          </div>
          <p className={style.description}>
            {movie.description}
          </p>
        </div>
      </div>

    </div>
  )
}

export default MovieDescription
