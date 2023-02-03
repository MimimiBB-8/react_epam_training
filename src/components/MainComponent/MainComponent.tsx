import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'
import { sortingChangesContextProvider } from '../../context/SortingChangesContext'
import { changeDataContextProvider } from '../../context/ChangeDataContext'

const MainComponent = () => (
  <div className={style.wrapper_component}>
    <sortingChangesContextProvider>
      <SortMovie />
      <changeDataContextProvider>
        <MovieGallery />
      </changeDataContextProvider>
    </sortingChangesContextProvider>
  </div>
)

export default MainComponent
