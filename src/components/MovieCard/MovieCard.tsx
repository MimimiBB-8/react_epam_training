import style from './MovieCard.module.scss'
import ImgSource from '../ImgSource/ImgSource'
import Additions from './Additions'
import React, { useContext } from 'react'
import { Context } from '../Context/Context'

interface MovieProps {
  keyID: any
  title: string
  year: string
  genre: string
  urlImg: string
}

const MovieCard = ({keyID, title, year, genre, urlImg }: MovieProps) => {

  const value = useContext(Context)

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if((e.target as Element).classList.contains('img_source')){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      if (value.toggleVisible) {
        value.toggleVisible(true)
      }
    }
    if(value.toggleItemID){
      value.toggleItemID(keyID)
    }
  }

  return (
    <div className={`${style.movie_card} movie_card`} id={keyID} onClick={handleOnClick}>
      <ImgSource alt={title} urlProp={urlImg} />
      <Additions />
      <div className={style.movie_name}>
        <h4>{title}</h4>
        <p className={style.movie_year}>{year.slice(0,4)}</p>
      </div>
      <p className={style.movie_genre}>{genre}</p>
    </div>
  )
}

export default MovieCard
