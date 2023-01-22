import style from './App.module.scss'
// import Header from './components/Header/Header'
import MainComponent from './components/MainComponent/MainComponent'
// import Footer from './components/Footer/Footer'
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <div className={style.app_wrapper}>
      <MainComponent/>
    </div>
  )
}

export default App
