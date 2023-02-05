import React, { useContext } from 'react'
import style from './Moviedescription.module.scss'
import Button from '../Button/Button'
import ImgSource from '../ImgSource/ImgSource'
import { StateVisibleContext } from '../../context/StateVisibleContext'
import { ChangeDataContext } from '../../context/ChangeDataContext'

const MovieDescription = () => {
  const stateVisibleValue = useContext(StateVisibleContext)
  const dataMovieValue = useContext(ChangeDataContext)
  const movie = dataMovieValue.movieData.filter((item) => item.id === stateVisibleValue.itemID)[0]

  function getTimeFromMins(mins: number) {
    const hours = Math.trunc(mins / 60)
    const minutes = mins % 60
    return `${hours}h   ${minutes}min`
  }

  const handleOnClick = () => {
    if (stateVisibleValue.toggleVisible) {
      stateVisibleValue.toggleVisible(false)
    }
  }

  return (
    <div className={style.header_description}>
      <div className={style.logo_line}>
        <label className={style.logo}>
          <span>netflix</span>roulette
        </label>
        <Button classname={'return_search'} onClick={handleOnClick} />
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
            <h5 className={style.description_year}>{movie.year?.split('').slice(0, 4)}</h5>
            <h5 className={style.description_time}>{getTimeFromMins(movie.time)}</h5>
          </div>
          <p className={style.description}>{movie.description}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDescription
