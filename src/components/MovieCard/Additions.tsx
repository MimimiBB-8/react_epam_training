import style from './Additions.module.scss'
import styles from './MovieCard.module.scss'
import Button from '../Button/Button'
import React, { useState } from 'react'

function Additions() {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className={style.additions_wrapper}>
      <div className={`${style.additions_menu} ${styles.additions_menu}`}
           onClick={() => setVisible(!visible)}>
        <p className={style.point}></p>
        <p className={style.point}></p>
        <p className={style.point}></p>
      </div>
      <div className={style.additions_choose} style={{display: visible ? 'block' : 'none'}}>
        <p className={style.additions_choose_item}>
          <Button classname={'close_button'} onclick={() => setVisible(!visible)} />
        </p>
        <p className={style.additions_choose_item}>Edit</p>
        <p className={style.additions_choose_item}>Delete</p>
      </div>

    </div>
  )

}

export default Additions
