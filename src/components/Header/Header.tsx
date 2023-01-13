import React from "react";
import '../../style/Header/header.css'
// import SearchForm from "./SearchForm";
import MovieDescription from "../MovieDescription/MovieDescription";
const Header: React.FC = () => (
    <div className={'header'}>
        {/*<div className={'backgroundImg'}></div>*/}
        <div className={'content'}>
            <div className={'first_line'}>
                <label className={'logo'}>netflixroulette</label>
                <a className={'add_movie'}>+ ADD MOVIE</a>
            </div>
            {/*<div className={'search_content'}>*/}
            {/*    <h2>FIND YOUR MOVIE</h2>*/}
            {/*    <SearchForm/>*/}
            {/*</div>*/}
            <MovieDescription/>
        </div>
    </div>
);

export default Header;
