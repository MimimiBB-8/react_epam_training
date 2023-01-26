import Button from '../Button/Button'
import style from './Deletionconfirmation.module.scss'

interface deleteMovieProps {
  onClick: () => void
}

const DeletionConfirmation = ({onClick}:deleteMovieProps) => (
  <div className={style.deletion_confirmation}>
    <Button classname={'close_button'} onClick={onClick}/>
    <h2>Delete MOVIE</h2>
    <p>Are you sure you want to delete this movie? </p>
    <div className={style.div_button}>
      <Button title={'confirm'} classname={'confirm'} onClick={onClick}/>
    </div>
  </div>
)

export default DeletionConfirmation
