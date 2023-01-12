import React from "react";

const SortMovie: React.FC = () => (
    <div className={'sort'}>
        <div className={'sort_genre'}>
            <p>ALL</p>
            <p>DOCUMENTARY</p>
            <p>COMEDY</p>
            <p>HORROR</p>
            <p>CRIME</p>
        </div>
        <div className={'sort_param'}>
            <p>SORT BY</p>
            <p>RELEASE DATE</p>
        </div>
    </div>
);

export default SortMovie;
