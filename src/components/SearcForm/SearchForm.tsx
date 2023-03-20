import style from './Searchform.module.scss'
import Button from '../Button/Button'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { type } from '@testing-library/user-event/dist/type';

interface SearchFormProps {

  onSubmit: (param: any) => void
}


const SearchForm = () => {
  const route = useRouter()

  const [searchTitle, setSearchTitle] = useState('');
  return (
    <form className={style.search_form} aria-label="form" >
      <input
        type={'search'}
        name={'search'}
        placeholder={'What do you want to watch?'}
        className={style.search_form_input}
        title='search'
        onChange={e => { setSearchTitle(e.target.value) }}
      />
      <Link href={{
        pathname: '/search',
        query: { title: `${searchTitle}`}
      }}>
        <Button title={'search'} classname={'search_button'} type={'button'} />
      </Link>

    </form>
  )
}

export default SearchForm
