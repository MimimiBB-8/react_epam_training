import React from "react";
import './header.css'
import SearchForm from "./SearchForm";
const Header = () => (

    <div className={'header'}>
        <div className={'content'}>
            <div className={'first_line'}>
                <label className={'logo'}><span>netflix</span>roulette</label>
                <a className={'add_movie'}>+ ADD MOVIE</a>
            </div>
            <div className={'search_content'}>
                <h2>FIND YOUR MOVIE</h2>
                <SearchForm/>
            </div>
        </div>
    </div>
);

export default Header;
