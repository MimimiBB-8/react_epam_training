import style from './Notification.module.scss'
import Button from '../Button/Button'
import { useContext } from 'react'
import { StateVisibleContext } from '../../context/StateVisibleContext'

const tick: string = require('../../img/svg/done.svg').default

interface addMovieProps {
  onClick: () => void
}

const SuccessNotification = ({ onClick }: addMovieProps) => {
  return (
    <div className={style.success_notification}>
      <Button classname={'close_button'} onClick={onClick} />
      <div className={style.done}>
        <img src={tick} alt={'done'} className={style.tick} />
      </div>
      <h2>congratulations</h2>
      <p>
        The movie has been added to <br />
        database successfully{' '}
      </p>
    </div>
  )
}

export default SuccessNotification
