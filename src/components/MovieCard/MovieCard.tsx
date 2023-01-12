import React from "react";
import '../../style/MovieCard/movieCard.css'
const logo = require('../../img/pulp_fiction.jpg');

const MovieCart: React.FC = () => (
    <div className={'movie_card'}>
        <img className={'poster'} src={logo}/>
        <div className={'movie_name'}>
            <h4>Name</h4>
            <p className={'movie_year'}>1999</p>
        </div>
        <p>Genre</p>
    </div>
);

export default MovieCart;
