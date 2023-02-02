import React, { useState } from 'react'
import style from './Additions.module.scss'
import styles from './MovieCard.module.scss'
import Button from '../Button/Button'
import Portal from '../Portal/Portal'
import EditMovie from '../EdditMovie/EditMovie'
import DeletionConfirmation from '../DeletionConfirmation/DeletionConfirmation'

function Additions() {
  const [visible, setVisible] = React.useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const handleClickClose = () => {
    setVisible(!visible);
  };

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
            <Button classname={'close_button_small'} onClick={handleClickClose} />
          </p>
          <p className={style.additions_choose_item} onClick={() => setShowModal(true)} >Edit</p>
          <p className={style.additions_choose_item} onClick={() => setShowModalDelete(true)}>Delete</p>
          {showModal && (
            <Portal>
              <EditMovie onClick={() => setShowModal(false)} />
            </Portal>
          )}
          {showModalDelete && (
            <Portal>
              <DeletionConfirmation onClick={() => setShowModalDelete(false)} />
            </Portal>
          )}
        </div>
      </div>
  )

}

export default Additions
