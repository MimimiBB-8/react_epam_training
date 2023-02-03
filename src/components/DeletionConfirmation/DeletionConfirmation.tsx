import Button from '../Button/Button'
import style from './Deletionconfirmation.module.scss'
import { useContext } from 'react'
import { stateVisibleContext } from '../../context/StateVisibleContext'
import { changeDataContext } from '../../context/ChangeDataContext'

interface deleteMovieProps {
  onClick: () => void
}


const DeletionConfirmation = ({ onClick }: deleteMovieProps) => {
  const value = useContext(stateVisibleContext)
  const valueData = useContext(changeDataContext)

  function handlerDeleteMovie(){
    if(valueData.deleteMovie){
      const movieIndex = valueData.movieData.findIndex((item)=>item.id === value.itemID)
      valueData.deleteMovie(movieIndex)
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
