import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'
import { SortingChangesContextProvider } from '../../context/SortingChangesContext'
import { ChangeDataContextProvider } from '../../context/ChangeDataContext'

const MainComponent = () => (
  <div className={style.wrapper_component}>
    <SortingChangesContextProvider>
      <SortMovie />
      <ChangeDataContextProvider>
        <MovieGallery />
      </ChangeDataContextProvider>
    </SortingChangesContextProvider>
  </div>
)

export default MainComponent
