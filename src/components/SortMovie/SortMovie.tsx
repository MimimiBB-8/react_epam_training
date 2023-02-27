import style from './Sortmovie.module.scss'
import { useDispatch } from 'react-redux'
import { changeFilterParam, changeSortParam } from '../../store/actions/sort'


const SortMovie = () => {

  const dispatch = useDispatch()

  const handleOnClickFilter = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {  
    if((e.target as Element).id !== ''){
      dispatch(changeFilterParam(`&filter=${(e.target as Element).id}`))
    }
  }

  const handleOnClickSort = (e:React.ChangeEvent<HTMLSelectElement>) => {   
    const sortParam = e.target.value.split('_')
    const sortBy = sortParam.slice(0,2).join('_')
    const sortOrder = sortParam.slice(-1).join()
    if(sortParam .length !== 0){
      dispatch(changeSortParam(`&sortBy=${sortBy}&sortOrder=${sortOrder}`))
    }
    
  }

  return (
    <>
      <div className={style.sort}>
        <nav>
          <ul className={style.sort_genre} onClick={handleOnClickFilter}>
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
              <select className={style.select_date_release} onChange={handleOnClickSort}>
                <option defaultValue='release_date' id={'release_date'}>
                  Choose...
                </option>
                <option value='release_date_asc' id={'release_date_asc'}>
                release Ascending
                </option>
                <option value='release_date_des' id={'release_date_des'}>
                release descending
                </option>
                <option value='vote_average_asc' id={'vote_average_asc'}>
                rating Ascending
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
        <div className={style.sort_carriage}></div>
      </div>
    </>
  )
}



export default SortMovie
