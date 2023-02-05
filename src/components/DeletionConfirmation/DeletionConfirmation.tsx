import Button from '../Button/Button'
import style from './Deletionconfirmation.module.scss'
import { useContext } from 'react'
import { StateVisibleContext } from '../../context/StateVisibleContext'
import { ChangeDataContext } from '../../context/ChangeDataContext'

interface deleteMovieProps {
  onClick: () => void
}

const DeletionConfirmation = ({ onClick }: deleteMovieProps) => {
  const stateVisibleValue = useContext(StateVisibleContext)
  const dataMovieValue = useContext(ChangeDataContext)

  function handlerDeleteMovie() {
    if (dataMovieValue.deleteMovie) {
      const movieIndex = stateVisibleValue.itemID
      dataMovieValue.deleteMovie(movieIndex)
    }
  }

  return (
    <div className={style.deletion_confirmation}>
      <Button classname={'close_button'} onClick={onClick} />
      <h2>Delete MOVIE</h2>
      <p>Are you sure you want to delete this movie? </p>
      <div className={style.div_button} onClick={onClick}>
        <Button title={'confirm'} classname={'confirm'} onClick={handlerDeleteMovie} />
      </div>
    </div>
  )
}
export default DeletionConfirmation
