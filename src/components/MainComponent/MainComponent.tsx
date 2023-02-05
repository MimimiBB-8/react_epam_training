import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'
import { SortingChangesContextProvider } from '../../context/SortingChangesContext'

const MainComponent = () => (
  <div className={style.wrapper_component}>
    <SortingChangesContextProvider>
      <SortMovie />
      <MovieGallery />
    </SortingChangesContextProvider>
  </div>
)

export default MainComponent
