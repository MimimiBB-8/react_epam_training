import style from './Sortmovie.module.scss'
import { useSearchParams } from 'react-router-dom'

const SortMovie = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const elementCarriage = document.querySelector('.sort_carriage')

  const handleOnClickFilter = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const filter = (e.target as Element).id
    filter === 'all' ?
      searchParams.delete('genre') :
      searchParams.set('genre', filter)
    setSearchParams(searchParams);
    if (elementCarriage) {
      if (elementCarriage.classList.length > 2) {
        elementCarriage.classList.remove(`${elementCarriage.classList[elementCarriage.classList.length - 1]}`)
      }
      elementCarriage.classList.add(`${style[filter]}`)
    }
  }

  const handleOnClickSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortParam = e.target.value.split('_')
    const sortBy = sortParam.slice(0, 2).join('_')
    const sortOrder = sortParam.slice(-1).join()
    searchParams.set('sortBy', sortBy);
    searchParams.set('sortOrder', sortOrder);
    setSearchParams(searchParams);
  }


  return (
    <>
      <div className={style.sort} >
        <nav>
          <ul className={style.sort_genre} onClick={handleOnClickFilter} >
          <li id={'all'}>all</li>
            <li id={'action'}>action</li>
            <li id={'comedy'}>comedy</li>
            <li id={'horror'}>horror</li>
            <li id={'crime'}>crime</li>
          </ul>
        </nav>
        <nav>
          <ul className={style.sort_param}>
            <li className={style.sort_by}>SORT BY</li>
            <li>
              <select className={style.select_date_release} onChange={handleOnClickSort}>
                <option defaultValue='release_date' id={'release_date'}>
                  Choose...
                </option>
                <option value='release_date_asc' id={'release_date_asc'}>
                  release ascending
                </option>
                <option value='release_date_des' id={'release_date_des'}>
                  release descending
                </option>
                <option value='vote_average_asc' id={'vote_average_asc'}>
                  rating ascending
                </option>
                <option value='vote_average_desc' id={'vote_average_desc'}>
                  rating descending
                </option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.sort_identifier}>
        <div className={`sort_carriage ${style.sort_carriage} `}></div>
      </div>
    </>
  )
}

export default SortMovie
