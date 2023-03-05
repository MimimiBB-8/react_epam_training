import style from './Searchform.module.scss'
import Button from '../Button/Button'
import { Link, useSearchParams } from 'react-router-dom'

const SearchForm = () => {
  const [search, setSearch] = useSearchParams('');

  let searchTitle = '';
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target;
      searchTitle = (form as HTMLFormElement).search.value
      if (searchTitle.length) setSearch({search : searchTitle , searchBy:'title'});
      (form as HTMLFormElement).search.value = ''
  }

  return (
    <form className={style.search_form} onSubmit={handleSubmit}>
      <input
        type={'search'}
        name={'search'}
        placeholder={'What do you want to watch?'}
        className={style.search_form_input}
      />
      <Button title={'search'} classname={'search_button'}type={'submit'} />
      
    </form>
  )
}

export default SearchForm
