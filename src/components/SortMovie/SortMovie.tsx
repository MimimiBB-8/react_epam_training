import style from './Sortmovie.module.scss'

const SortMovie = () => (
  <>
    <div className={style.sort}>
      <nav>
        <ul className={style.sort_genre}>
          <li>ALL</li>
          <li>DOCUMENTARY</li>
          <li>COMEDY</li>
          <li>HORROR</li>
          <li>CRIME</li>
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

export default SortMovie
