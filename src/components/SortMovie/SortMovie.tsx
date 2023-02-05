import style from './Sortmovie.module.scss'
import React, { useContext } from 'react'
import { SortingChangesContext } from '../../context/SortingChangesContext'

const SortMovie = () => {
  const sortingValue = useContext(SortingChangesContext)

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (sortingValue.toggleGenreFilter) {
      sortingValue.toggleGenreFilter((e.target as Element).id)
    }
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (sortingValue.toggleRelease) {
      sortingValue.toggleRelease(e.target.value)
    }
  }

  return (
    <>
      <div className={style.sort}>
        <nav>
          <ul className={style.sort_genre} onClick={handleOnClick}>
            <li id={'all'}>ALL</li>
            <li id={'action'}>Action</li>
            <li id={'comedy'}>COMEDY</li>
            <li id={'horror'}>HORROR</li>
            <li id={'crime'}>CRIME</li>
          </ul>
        </nav>
        <nav>
          <ul className={style.sort_param}>
            <li className={style.sort_by}>SORT BY</li>
            <li>
              <select className={style.select_date_release} onChange={handleOnChange}>
                <option defaultValue='release_date' id={'release_date'}>
                  release date
                </option>
                <option value='ascending' id={'ascending'}>
                  Ascending
                </option>
                <option value='descending' id={'descending'}>
                  descending
                </option>
              </select>
            </li>
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
