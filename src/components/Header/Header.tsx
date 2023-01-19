import style from './Header.module.scss'
import SearchForm from './SearchForm'

const Header = () => (
  <div className={style.header}>
    <div className={style.content}>
      <div className={style.first_line}>
        <label className={style.logo}>
          <span>netflix</span>roulette
        </label>
        <a className={style.add_movie}>+ ADD MOVIE</a>
      </div>
      <div className={style.search_content}>
        <h2>FIND YOUR MOVIE</h2>
        <SearchForm />
      </div>
    </div>
  </div>
)

export default Header
