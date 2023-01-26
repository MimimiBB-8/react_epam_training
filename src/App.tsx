import {useState} from 'react'
import style from './App.module.scss'
import Header from './components/Header/Header'
import MainComponent from './components/MainComponent/MainComponent'
import Footer from './components/Footer/Footer'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import {ThemeProvider} from './components/Context/Context'

function App() {
  const [title, setDark] = useState(false);

  return (
   <ThemeProvider>
    <div className={style.app_wrapper}>
       <div className={style.page_wrapper}>
        <ErrorBoundary>
          <div className={style.main_wrapper}>
            <Header/>
            <MainComponent/>
            <Footer/>
          </div>
        </ErrorBoundary>
       </div>
    </div>
    </ThemeProvider>
  )
}

export default App;
