import { StateVisibleContextProvider } from '../../context/StateVisibleContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from '../../App.module.scss'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className={style.app_wrapper}>
        <div className={style.page_wrapper}>
          <ErrorBoundary>
            <div className={style.main_wrapper}>
              <StateVisibleContextProvider>
                <Header />
                <Outlet />
              </StateVisibleContextProvider>
              <Footer />
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export { Layout }