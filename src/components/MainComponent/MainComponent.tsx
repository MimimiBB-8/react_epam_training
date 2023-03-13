import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'
import { SortingChangesContextProvider } from '../../context/SortingChangesContext'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const MainComponent = () => {
  const [searchParams, setSearchParam] = useSearchParams()
  useEffect(() => {
      searchParams.delete('movie')
      setSearchParam(searchParams)
  }, [])

  return (
    <main className={style.wrapper_component}>
      <SortingChangesContextProvider>
        <SortMovie />
        <MovieGallery />
      </SortingChangesContextProvider>
    </main>
  )
}

export default MainComponent
