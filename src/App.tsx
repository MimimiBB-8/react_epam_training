import './App.css';
import Header from "./components/Header/Header";
import MainComponent from "./components/MainComponent/MainComponent";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import SuccessNotification from "./components/SuccessNotification/SuccessNotification";
function App() {
    return (
        <div className="app_wrapper">

             <ErrorBoundary>
                <Header/>
                <MainComponent/>
                <Footer/>
            </ErrorBoundary>
            <SuccessNotification/>
        </div>
    );
}

export default App;
