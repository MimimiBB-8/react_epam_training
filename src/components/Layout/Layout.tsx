import { StateVisibleContextProvider } from '../../context/StateVisibleContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from '../../App.module.scss'
import MainComponent from '../MainComponent/MainComponent';
import { Provider } from 'react-redux';
import { store } from '../../store';

const Layout = () => {

  return (
    <>
      <Provider store={store}>
        <ErrorBoundary>
          <div className={style.app_wrapper}>
            <div className={style.page_wrapper}>
              <div className={style.main_wrapper}>
                <StateVisibleContextProvider>
                  <Header />
                  <MainComponent />
                </StateVisibleContextProvider>
                <Footer />
              </div>
            </div>
          </div>
        </ErrorBoundary>
      </Provider>

    </>
  )
}

export { Layout }