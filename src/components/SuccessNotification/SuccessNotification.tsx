import style from './Notification.module.scss'
import Button from '../Button/Button'
const tick: string = require('../../img/svg/done.svg').default
const SuccessNotification = () => (
  <div className={style.success_notification}>
    <Button classname={'close'}/>
    <div className={style.done}>
      <img src={tick} alt={'done'} className={style.tick}/>
    </div>
    <h2>congratulations</h2>
    <p>
      The movie has been added to <br />
      database successfully{' '}
    </p>
  </div>
)

export default SuccessNotification
