import style from './Header.module.scss'
import { useState, useContext, Fragment } from 'react'
import SearchForm from '../SearcForm/SearchForm'
import Button from '../Button/Button'
import Portal from '../Portal/Portal'
import AddMovie from '../AddMovie/AddMovie'
import MovieDescription from '../MovieDescription/MovieDescription'
import { StateVisibleContext } from '../../context/StateVisibleContext'


type HeaderProps = {
  children?: React.ReactNode
};

const Header = ({ children }: HeaderProps) => {
  const [showModal, setShowModal] = useState(false)
  const stateVisibleValue = useContext(StateVisibleContext)

  return (
    <>
      <header className={style.header}>
        {stateVisibleValue.visible ? (
          <Fragment>
            {children}</Fragment>
        ) : (
          <div className={style.content}>
            <div className={style.first_line}>
              <label className={style.logo}>
                <span>netflix</span>roulette
              </label>
              <Button
                classname={'add_movie'}
                title={'+ ADD MOVIE'}
                onClick={() => setShowModal(true)}
              />
            </div>
            <div className={style.search_content}>
              <h2>FIND YOUR MOVIE</h2>
              <SearchForm />
            </div>
          </div>
        )}
      </header>
      {/* {showModal && (
        // <Portal>
        //   <AddMovie onClick={() => setShowModal(false)} />
        // </Portal>
      )} */}
    </>
  )
}

export default Header
