import React from "react";
import MovieGallery from "../MovieCard/MovieGallery";
import SortMovie from "../SortMovie/SortMovie";
import './maincomponent.css'


const MainComponent = () => (
    <div className={'wrapper_component'}>
        <SortMovie/>
        <MovieGallery/>
    </div>
);

export default MainComponent;
