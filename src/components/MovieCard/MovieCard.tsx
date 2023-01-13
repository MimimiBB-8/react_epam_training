import React from "react";
import '../../style/MovieCard/movieCard.css';
import ImgSource from "../ImgSource/ImgSource";
const MovieCart = () => (
    <div className={'movie_card'}>
        <ImgSource/>
        <div className={'movie_name'}>
            <h4>Name</h4>
            <p className={'movie_year'}>1999</p>
        </div>
        <p>Genre</p>
    </div>
);

export default MovieCart;
