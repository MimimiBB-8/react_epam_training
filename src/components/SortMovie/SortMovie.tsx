import { useRouter } from 'next/router';
import style from './Sortmovie.module.scss'
import Link from 'next/link';

const SortMovie = () => {

  const rout = useRouter()

  return (
    <>
      <div className={style.sort} >
        <Link href={{
          pathname: '/search',
          query: { genre: 'action'}
        }}>
          <nav>
            <ul className={style.sort_genre} >
              <li id={'all'}>all</li>
              <li id={'action'}>action</li>
              <li id={'comedy'}>comedy</li>
              <li id={'horror'}>horror</li>
              <li id={'crime'}>crime</li>
            </ul>
          </nav>
        </Link>
        <nav>

          <ul className={style.sort_param}>
            <li className={style.sort_by}>SORT BY</li>
            <li>
              <Link href={{
                pathname: '/search',
                query: {
                  sortBy: 'release_date', sortOrder: 'asc'
                }
              }}>
                <select className={style.select_date_release} >
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
              </Link>
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
