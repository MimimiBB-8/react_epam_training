import style from './Notification.module.scss'
import CloseButton from '../CloseButton/CloseButton'
const logo: string = require('../../img/svg/done.svg').default
const SuccessNotification = () => (
  <div className={style.success_notification}>
    <CloseButton />
    <div className={style.done}>
      <img src={logo} alt={'done'} />
    </div>
    <h2>congratulations</h2>
    <p>
      The movie has been added to <br />
      database successfully{' '}
    </p>
  </div>
)

export default SuccessNotification
