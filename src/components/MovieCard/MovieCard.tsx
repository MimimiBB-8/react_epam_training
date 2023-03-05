import style from './MovieCard.module.scss'
import ImgSource from '../ImgSource/ImgSource'
import Additions from './Additions'
import React, { useCallback, useContext } from 'react'
import { StateVisibleContext } from '../../context/StateVisibleContext'
import { useDispatch } from 'react-redux'
import { receivingId } from '../../store/actions/reservingId'
import styles from '../MovieCard/MovieCard.module.scss'

interface MovieProps {
  keyID: any
  title: string
  year: string
  genres: string
  urlImg: string
}

const MovieCard = ({ keyID, title, year, genres, urlImg }: MovieProps) => {
  
  const stateVisibleValue = useContext(StateVisibleContext)

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if ((e.target as Element).classList.contains('img_source')) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      if (stateVisibleValue.toggleVisible) {
        stateVisibleValue.toggleVisible(true)
      }
    }
  }

  const dispatch = useDispatch()

  const setItemId = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () =>  dispatch(receivingId(keyID)),
    [dispatch]
  )

  return (

    <div className={`${style.movie_card} movie_card`} id={keyID} >
      <div  onClick={handleOnClick} className={`${styles.poster}`}>
      <ImgSource alt={title} urlProp={urlImg} onclick={setItemId} />
      </div>
      <Additions onClick={setItemId}/>
      <div className={style.movie_name}>
        <h4>{title}</h4>
        <p className={style.movie_year}>{year.slice(0, 4)}</p>
      </div>
      <p className={style.movie_genre}>{genres}</p>
    </div>
  )
}

export default MovieCard
