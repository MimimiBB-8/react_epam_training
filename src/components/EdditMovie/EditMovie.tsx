import style from './EditMovie.module.scss'
import BasicForm from '../BasicForm/BasicForm'
import Button from '../Button/Button'
import { useState } from 'react'
import SuccessNotification from '../SuccessNotification/SuccessNotification'
import Portal from '../Portal/Portal'

interface editMovieProps {
  onClick: () => void
}

const EditMovie = ({ onClick }: editMovieProps) => {
  const [showModal, setShowModal] = useState(false)

  function handlerCloseAllWindows() {
    onClick()
    setShowModal(false)
  }
  
  return (
    <div className={style.edit_movie}>
      <Button classname={'close_button'} onClick={onClick} />
      <h2 className={style.topic}>Edit MOVIE</h2>
      <BasicForm editForm={true} onClick={onClick}/>
      {showModal && (
        <Portal>
          <SuccessNotification onClick={handlerCloseAllWindows} />
        </Portal>
      )}
    </div>
    
  )
}
export default EditMovie
