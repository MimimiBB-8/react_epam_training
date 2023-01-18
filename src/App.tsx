import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainComponent from "./components/MainComponent/MainComponent";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
function App() {
    return (
        <div className="app_wrapper">
            <ErrorBoundary>
                <Header/>
                <MainComponent/>
                <Footer/>
            </ErrorBoundary>
        </div>
    );
}

export default App;
