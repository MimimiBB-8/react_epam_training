import Button from '../Button/Button'
import CloseButton from '../CloseButton/CloseButton'
import style from './Deletionconfirmation.module.scss'

const DeletionConfirmation = () => (
  <div className={style.deletion_confirmation}>
    <CloseButton />
    <h2>Delete MOVIE</h2>
    <p>Are you sure you want to delete this movie? </p>
    <Button title={'confirm'} />
  </div>
)

export default DeletionConfirmation
