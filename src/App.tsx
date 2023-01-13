import React from 'react';
import './style/App.css';
// import Header from "./components/Header/Header";
// import MainComponent from "./components/MainComponent/MainComponent";
// import Footer from "./components/Footer/Footer";
// import AddMovie from "./components/AddMovie/AddMovie";
// import LogIn from "./components/LogIn/LogIn";
// import MovieDescription from "./components/MovieDescription/MovieDescription";
import SuccessNotification from "./components/SuccessNotification/SuccessNotification";
function App() {
    return (
        <div className="app_wrapper">
            {/*<Header/>*/}
            {/*<MainComponent/>*/}
            {/*<Footer/>*/}
            {/*<AddMovie/>*/}
            {/*<LogIn/>*/}
            {/*<MovieDescription/>*/}
            <SuccessNotification/>
        </div>
    );
}

export default App;
