import MainComponent from './components/MainComponent/MainComponent'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { Layout } from './components/Layout/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='search' element={<MainComponent />} >
          
        </Route>
        <Route path='search/:title' element={<MainComponent />} ></Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
