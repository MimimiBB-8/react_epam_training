import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'
import { SortingChangesContextProvider } from '../../context/SortingChangesContext'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const MainComponent = () => {
  const [searchParams, setsearchParam] = useSearchParams()
  useEffect(() => {
      searchParams.delete('movie')
      setsearchParam(searchParams)
  }, [])

  return (
    <div className={style.wrapper_component}>
      <SortingChangesContextProvider>
        <SortMovie />
        <MovieGallery />
      </SortingChangesContextProvider>
    </div>
  )
}

export default MainComponent
