import style from './Header.module.scss'
import React, { useState, useContext } from 'react'
import SearchForm from './SearchForm'
import Button from '../Button/Button'
import Portal from '../Portal/Portal'
import AddMovie from '../AddMovie/AddMovie'
import {Context} from '../Context/Context'
import MovieDescription from '../MovieDescription/MovieDescription'

const Header = () => {

  const [showModal, setShowModal] = useState(false)
  const { dark, toggleDark } = useContext(Context);
  const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (toggleDark) {
      toggleDark()
    }
    console.log(dark)
  };
  return (
    <>    <div className={style.header} onClick={handleOnClick}>
      <div className={style.content}>
        <div className={style.first_line}>
          <label className={style.logo}>
            <span>netflix</span>roulette
          </label>
          <Button classname={'add_movie'} title={'+ ADD MOVIE'} onClick={() => setShowModal(true)} />
        </div>
        <div className={style.search_content}>
          <h2>FIND YOUR MOVIE</h2>
          <SearchForm />
        </div>
        <MovieDescription/>
      </div>

    </div>
      {showModal && (
        <Portal>
          <AddMovie onClick={() => setShowModal(false)} />
        </Portal>
      )}
    </>

  )
}


export default Header
