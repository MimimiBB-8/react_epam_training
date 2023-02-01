import BasicForm from '../BasicForm/BasicForm'
import style from './Addmovie.module.scss'
import Button from '../Button/Button'
import SuccessNotification from '../SuccessNotification/SuccessNotification'
import { useState } from 'react'
import Portal from '../Portal/Portal'

interface addMovieProps {
  onClick: () => void
}
const AddMovie = ({onClick}:addMovieProps) => {

  const [showModal, setShowModal] = useState(false)

  return (
      <div className={style.add_movie}>
        <Button classname={'close_button'} onClick={onClick}/>
        <h2 className={style.topic}>ADD MOVIE</h2>
        <BasicForm/>
        {showModal && (
          <Portal>
            <SuccessNotification onClick={() => setShowModal(false)} />
          </Portal>
        )}
      </div>
  )
}

export default AddMovie
