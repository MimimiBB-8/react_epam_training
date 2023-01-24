import BasicForm from '../BasicForm/BasicForm'
import style from './Addmovie.module.scss'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'

interface AddMovieProps {
  status: string
  updateStatus: (arg: string) => void
}
const AddMovie = ({status, updateStatus}:AddMovieProps) => {
  const [firstChildName, setFirstChildName] = useState<string>('')

  useEffect(() => {

    setFirstChildName(status)

  },[status])
  return (
    <div className={style.add_movie_wrapper} id={'add'}>
      <div className={style.add_movie}>
        <Button classname={'close_button'} onClick={()=>updateStatus('hide')} />
        <h2 className={style.topic}>ADD MOVIE</h2>
        <BasicForm />
      </div>
    </div>

  )
}

export default AddMovie
