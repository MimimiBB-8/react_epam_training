import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

ReactDOM.hydrate(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
  ,
  document.getElementById('root'),
)
