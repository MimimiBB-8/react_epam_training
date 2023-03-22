import style from '../src/App.module.scss'
import { Provider } from 'react-redux';
import { store } from '../src/store';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';

type GlobalLayoutProps = {
    children: React.ReactNode
};

export const GlobalLayout = ({ children }: GlobalLayoutProps) => (

    <>
        <Provider store={store}>
            <ErrorBoundary>
                <div className={style.app_wrapper}>
                    {children}
                </div>
            </ErrorBoundary>
        </Provider>

    </>
)
