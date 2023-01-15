import React from "react";
import '../../style/MovieCard/moviegallery.css'
import MovieCart from "./MovieCard";
import {information} from "../../data/data.js";

function MovieGallery() {
    const movieItems = information.map(item => <MovieCart key={item.id} title={item.title} year={item.year}
                                                          genre={item.genre} urlImg={item.url}/>)
    return (
        <div className={'movie_gallery'}>
            {movieItems}
        </div>
    )

}

export default MovieGallery;
