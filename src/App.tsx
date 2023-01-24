import style from './App.module.scss'
import Header from './components/Header/Header'
import MainComponent from './components/MainComponent/MainComponent'
import Footer from './components/Footer/Footer'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import AddMovie from './components/AddMovie/AddMovie'
import EditMovie from './components/EdditMovie/EditMovie'
import { useState } from 'react'

function App() {
  const [activeStatus, setActiveStatus] = useState<string>('hide')
  const el = document.getElementById('add');
  const updateStatus = (status: string):void => {
    setActiveStatus(status)
    if(status === 'show' && el!=null){
      el.style.display ='block'
    }
    if(status === 'hide' && el!=null){
      el.style.display ='none'
    }
  }

  return (
    <div className={style.app_wrapper}>
       <ErrorBoundary>
         <div className={style.main_wrapper}>
           <Header updateStatus={updateStatus} status={activeStatus}/>
           <MainComponent/>
           <Footer/>
         </div>
         <AddMovie updateStatus={updateStatus} status={activeStatus}/>
       </ErrorBoundary>
    </div>
  )
}

export default App
