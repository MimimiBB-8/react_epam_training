import style from './Searchform.module.scss'
import Button from '../Button/Button'
import { useState } from 'react'
import {useRouter} from 'next/router';

interface SearchFormProps{
  
  onSubmit: (param: any) => void 
}

const SearchForm = () => {
  const router =  useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
      event.preventDefault();
      const form = event.target;
      const searchTitle = (form as HTMLFormElement).search.value;
      router.push(`/?search=${searchTitle}`);
      (form as HTMLFormElement).search.value = ''
  }
  return (
    <form className={style.search_form} onSubmit={handleSubmit} aria-label="form" >
      <input
        type={'search'}
        name={'search'}
        placeholder={'What do you want to watch?'}
        className={style.search_form_input}
        title='search'
      />
      <Button title={'search'} classname={'search_button'} type={'submit'}/>      
    </form>
  )
}

export default SearchForm
