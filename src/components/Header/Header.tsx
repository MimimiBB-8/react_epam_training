import style from './Header.module.scss'
import { useState } from 'react'
import SearchForm from './SearchForm'
import Button from '../Button/Button'
import Portal from '../Portal/Portal'
import AddMovie from '../AddMovie/AddMovie'

const Header = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className={style.header}>
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
      </div>
      {showModal && (
        <Portal>
          <AddMovie onClick={() => setShowModal(false)} />
        </Portal>
      )}
    </div>
  )
}


export default Header
