import React from "react";
import MovieGallery from "../MovieCard/MovieGallery";
import SortMovie from "../SortMovie/SortMovie";
import '../../style/maincomponent/maincomponent.css'
const MainComponent: React.FC = () => (
    <div className={'wrapper_component'}>
        <SortMovie/>
        <MovieGallery/>
    </div>
);

export default MainComponent;
