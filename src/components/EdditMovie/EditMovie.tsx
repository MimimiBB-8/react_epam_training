import style from './EditMovie.module.scss'
import BasicForm from '../BasicForm/BasicForm'
import Button from '../Button/Button'

const EditMovie = () => (
  <div className={style.edit_movie_wrapper} id={'add'}>
    <div className={style.edit_movie}>
      <Button classname={'close_button'} />
      <h2 className={style.topic}>Edit MOVIE</h2>
      <BasicForm />
    </div>
  </div>
)

export default EditMovie
