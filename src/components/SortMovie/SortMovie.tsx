import React from "react";
import '../../style/SortMovie/sortmovie.css'

const SortMovie = () => (
        <>
            <div className={'sort'}>
                <nav>
                    <ul className={'sort_genre'}>
                        <li>ALL</li>
                        <li>DOCUMENTARY</li>
                        <li>COMEDY</li>
                        <li>HORROR</li>
                        <li>CRIME</li>
                    </ul>
                </nav>
                <nav>
                    <ul className={'sort_param'}>
                        <li>SORT BY</li>
                        <li>RELEASE DATE</li>
                    </ul>
                </nav>
            </div>
            <div className={'sort_identifier'}>
                <div className={'sort_carriage'}></div>
            </div>
        </>
    );

export default SortMovie;
