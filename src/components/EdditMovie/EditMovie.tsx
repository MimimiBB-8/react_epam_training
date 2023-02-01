import style from './EditMovie.module.scss'
import BasicForm from '../BasicForm/BasicForm'
import Button from '../Button/Button'

interface editMovieProps {
  onClick: () => void,
}

const EditMovie = ({ onClick }: editMovieProps) => {
  return (
    <div className={style.edit_movie}>
      <Button classname={'close_button'} onClick={onClick} />
      <h2 className={style.topic}>Edit MOVIE</h2>
      <BasicForm/>
    </div>
  )
}
export default EditMovie
