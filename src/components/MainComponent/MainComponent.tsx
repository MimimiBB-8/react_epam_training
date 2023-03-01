import MovieGallery from '../MovieGallery/MovieGallery'
import SortMovie from '../SortMovie/SortMovie'
import style from './Maincomponent.module.scss'
import { SortingChangesContextProvider } from '../../context/SortingChangesContext'
import { Route, Routes } from 'react-router-dom'

const MainComponent = () => (
  <div className={style.wrapper_component}>
    <SortingChangesContextProvider>
      <SortMovie />
      <Routes>
        <Route path='/' element={<MovieGallery />}></Route>
        <Route path='/search' element={<div> fghjfhgjkj </div>}/>
        <Route path="posts/:id" element={<MovieGallery />} />
      </Routes>
    </SortingChangesContextProvider>
  </div>
)

export default MainComponent
