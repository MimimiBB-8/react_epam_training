import style from './Additions.module.scss'
import styles from './MovieCard.module.scss'
import Button from '../Button/Button'

const Additions = ()=>(
  <div className={style.additions_wrapper}>
    <div className={`${style.additions_menu} ${styles.additions_menu}`}>
      <p className={style.point}></p>
      <p className={style.point}></p>
      <p className={style.point}></p>
    </div>
    <div className={style.additions_choose}>
      <p>
        <Button classname={'close_button'}/>
      </p>
      <p>Edit</p>
      <p>Delete</p>
    </div>
  </div>
)

export default Additions
