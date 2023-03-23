import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'

const MainComponent = () => {


  return (
    <main className={style.wrapper_component}>
        <SortMovie />
        {/* <MovieGallery /> */}
    </main>
  )
}

export default MainComponent
