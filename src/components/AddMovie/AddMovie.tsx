import BasicForm from '../BasicForm/BasicForm'
import style from './Addmovie.module.scss'
import Button from '../Button/Button'

interface addMovieProps {
  onClick: () => void
}
const AddMovie = ({onClick}:addMovieProps) => {
  return (
    <div className={style.add_movie_wrapper} id={'add'} >
      <div className={style.add_movie}>
        <Button classname={'close_button'} onClick={onClick}/>
        <h2 className={style.topic}>ADD MOVIE</h2>
        <BasicForm />
      </div>
    </div>

  )
}

export default AddMovie
