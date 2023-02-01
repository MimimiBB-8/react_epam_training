import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'
import { MainProvider } from '../Context/ContextMain'
import { DataProvider } from '../Context/ContextData'

const MainComponent = () => (
  <div className={style.wrapper_component}>
    <MainProvider>
      <SortMovie />
      <DataProvider>
        <MovieGallery />
      </DataProvider>
    </MainProvider>
  </div>
)

export default MainComponent
