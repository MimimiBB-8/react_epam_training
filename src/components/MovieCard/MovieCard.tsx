import style from './MovieCard.module.scss'
import ImgSource from '../ImgSource/ImgSource'
import Additions from './Additions'
import React, { useContext } from 'react'
import { StateVisibleContext } from '../../context/StateVisibleContext'
import { useDispatch } from 'react-redux'
import { receivingId } from '../../store/actions/reservingId'

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
    if (stateVisibleValue.toggleItemID) {
      stateVisibleValue.toggleItemID(keyID)
    }
  }

  const dispatch = useDispatch()

  const setItemId = ()=>{
    dispatch(receivingId(keyID))
  }

  return (
    <div className={`${style.movie_card} movie_card`} id={keyID} onClick={handleOnClick} >
      <ImgSource alt={title} urlProp={urlImg} onclick={setItemId}/>
      <Additions />
      <div className={style.movie_name}>
        <h4>{title}</h4>
        <p className={style.movie_year}>{year.slice(0, 4)}</p>
      </div>
      <p className={style.movie_genre}>{genres}</p>
    </div>
  )
}

export default MovieCard
