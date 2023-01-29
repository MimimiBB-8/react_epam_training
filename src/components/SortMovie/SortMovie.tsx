import style from './Sortmovie.module.scss'
import React, { useContext } from 'react'
import { Context } from '../Context/Context'

const SortMovie = () => {
  const value = useContext(Context)
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (value.toggleGenreFilter) {
      value.toggleGenreFilter((e.target as Element).id)
    }
  }

  return (
    <>
      <div className={style.sort}>
        <nav>
          <ul className={style.sort_genre} onClick={handleOnClick}>
            <li id={'all'}>ALL</li>
            <li id={'Action'}>Action</li>
            <li id={'Comedy'}>COMEDY</li>
            <li id={'horror'}>HORROR</li>
            <li id={'Crime'}>CRIME</li>
          </ul>
        </nav>
        <nav>
          <ul className={style.sort_param}>
            <li>SORT BY</li>
            <li>RELEASE DATE</li>
          </ul>
        </nav>
      </div>
      <div className={style.sort_identifier}>
        <div className={style.sort_carriage}></div>
      </div>
    </>
  )
}
export default SortMovie
