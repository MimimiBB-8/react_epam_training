import style from './Searchform.module.scss'
import Button from '../Button/Button'

const SearchForm = () => (
  <form className={style.search_form}>
    <input type={'text'} placeholder={'What do you want to watch?'} className={style.search_form_input}/>
    <Button title={'search'} classname={'search_button'} />
  </form>
)

export default SearchForm
