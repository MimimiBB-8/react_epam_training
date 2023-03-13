import Button from '../Button/Button'
import style from './Deletionconfirmation.module.scss'
import { useCallback} from 'react'
import { useAppSelector } from '../../hooks/useTypeRedux'
import { deleteData } from '../../store/actions/data'
import { useDispatch } from 'react-redux'

interface deleteMovieProps {
  onClick: () => void
}

const DeletionConfirmation = ({ onClick }: deleteMovieProps) => {

  const dispatch = useDispatch();

  const idDelete = useAppSelector((state) => state.recervingId)

  const handlerDeleteMovie = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () => dispatch(deleteData(idDelete.itemId)),
    [dispatch]
  )

  return (
    <div className={style.deletion_confirmation}>
      <Button classname={'close_button'} onClick={onClick} />
      <h2>Delete MOVIE</h2>
      <p>Are you sure you want to delete this movie? </p>
      <div className={style.div_button}>
        <Button title={'confirm'} classname={'confirm'} onClick={ handlerDeleteMovie} />
      </div>
    </div>
  )
}
export default DeletionConfirmation
