
import style from './App.module.scss'
import Header from './components/Header/Header'
import MainComponent from './components/MainComponent/MainComponent'
import Footer from './components/Footer/Footer'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { StateVisibleContextProvider } from './context/StateVisibleContext'
import AddMovie from './components/AddMovie/AddMovie'

function setShowModal(){
  console.log()
}
function App() {
  return (
    <div className={style.app_wrapper}>
      <div className={style.page_wrapper}>
        <ErrorBoundary>
          <div className={style.main_wrapper}>
            <AddMovie onClick={() => setShowModal()}/>
            <StateVisibleContextProvider>
                <Header />
                <MainComponent />
            </StateVisibleContextProvider>
            <Footer />
          </div>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
