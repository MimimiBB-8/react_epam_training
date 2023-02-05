import style from './Addmovie.module.scss'
import { useState } from 'react'
import BasicForm from '../BasicForm/BasicForm'
import Button from '../Button/Button'
import SuccessNotification from '../SuccessNotification/SuccessNotification'
import Portal from '../Portal/Portal'

interface addMovieProps {
  onClick: () => void
}
const AddMovie = ({ onClick }: addMovieProps) => {
  const [showModal, setShowModal] = useState(false)

  function handlerCloseAllWindows() {
    onClick()
    setShowModal(false)
  }
  return (
    <div className={style.add_movie}>
      <Button classname={'close_button'} onClick={onClick} />
      <h2 className={style.topic}>ADD MOVIE</h2>
      <BasicForm position={true} onClick={onClick} showModalWindow={setShowModal} />
      {showModal && (
        <Portal>
          <SuccessNotification onClick={handlerCloseAllWindows} />
        </Portal>
      )}
    </div>
  )
}

export default AddMovie
