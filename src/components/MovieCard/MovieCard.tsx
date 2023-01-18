import React from "react";
import './MovieCard.css';
import ImgSource from "../ImgSource/ImgSource";
interface MovieProps{
    title: string,
    year: string,
    genre: string,
    urlImg: string
}
const MovieCart = ({title, year, genre, urlImg}:MovieProps) => (
    <div className={'movie_card'}>
        <ImgSource alt={title} urlProp={urlImg}/>
        <div className={'movie_name'}>
            <h4>{title}</h4>
            <p className={'movie_year'}>{year}</p>
        </div>
        <p className={'movie_genre'}>{genre}</p>
    </div>
);

export default MovieCart;
