import React from "react";
import '../../style/MovieCard/moviegallery.css'
import MovieCart from "./MovieCard";

const MovieGallery: React.FC = () => (
    <div className={'movie_gallery'}>
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
    </div>
);

export default MovieGallery;
