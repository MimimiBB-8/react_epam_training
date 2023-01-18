import React from 'react';
import './style/App.css';
// import Header from "./components/Header/Header";
// import MainComponent from "./components/MainComponent/MainComponent";
// import Footer from "./components/Footer/Footer";
// import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import AddMovie from "./components/AddMovie/AddMovie";
function App() {
    return (
        <div className="app_wrapper">
            {/*<ErrorBoundary>*/}
            {/*    <Header/>*/}
            {/*    <MainComponent/>*/}
            {/*    <Footer/>*/}
            {/*</ErrorBoundary>*/}
            <AddMovie/>
        </div>
    );
}

export default App;
