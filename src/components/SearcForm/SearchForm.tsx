import style from './Searchform.module.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const SearchForm = () => (
  <form className={style.search_form}>
    <input
      type={'text'}
      placeholder={'What do you want to watch?'}
      className={style.search_form_input}
    />
    <Link to='/search'><Button title={'search'} classname={'search_button'} /></Link>
    
  </form>
)

export default SearchForm
