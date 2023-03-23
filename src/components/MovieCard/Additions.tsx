import { useState } from 'react'
import style from './Additions.module.scss'
import styles from './MovieCard.module.scss'
import Button from '../Button/Button'
import Portal from '../Portal/Portal'
import EditMovie from '../EdditMovie/EditMovie'
import DeletionConfirmation from '../DeletionConfirmation/DeletionConfirmation'

interface AdditionsProps{
  onClick: ()=>void
}
function Additions({onClick}:AdditionsProps) {
  const [visible, setVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const handleClickClose = () => {
    onClick()
    setVisible(!visible)
  }
  
  return (
    <div className={`${style.additions_wrapper} additions_wrapper` }  >
      <div
        className={`${style.additions_menu} ${styles.additions_menu} additions_menu`}
        onClick={handleClickClose}
      >
        <p className={style.point}></p>
        <p className={style.point}></p>
        <p className={style.point}></p>
      </div>
      {visible ? (
        <div className={style.additions_choose}>
          <p className={style.additions_choose_item}>
            <Button classname={'close_button_small'} onClick={handleClickClose} />
          </p>
          <p
            className={`${style.additions_choose_item} additions_choose_item`}
            onClick={() => setShowModal(true)}
          >
            Edit
          </p>
          <p
            className={`${style.additions_choose_item} additions_choose_item`}
            onClick={() => setShowModalDelete(true)}
          >
            Delete
          </p>
          {/* {showModal && (
            <Portal>
              <EditMovie onClick={() => setShowModal(false)} />
            </Portal>
          )}
          {showModalDelete && (
            <Portal>
              <DeletionConfirmation onClick={() => setShowModalDelete(false)} />
            </Portal>
          )} */}
        </div>
      ) : null}
    </div>
  )
}

export default Additions
