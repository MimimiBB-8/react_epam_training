import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'

const MainComponent = () => (
  <div className={style.wrapper_component}>
    <SortMovie />
    <MovieGallery />
  </div>
)

export default MainComponent
