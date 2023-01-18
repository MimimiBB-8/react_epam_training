import './moviedescription.css'
import React from "react";
import './moviedescription.css'
import ImgSource from "../ImgSource/ImgSource";

const MovieDescription = () => (
    <div className={'description_wrapper'}>
        <ImgSource/>
        <div className={'description_movie'}>
            <div className={'group_name_rating'}>
                <h2>Pulp Fiction</h2>
                <div className={'circle_paragraph'}>
                    <p className={'rating'}>8.9</p>
                </div>
            </div>
            <p className={'description_genre '}>Genre</p>
            <div className={'group_year_time'}>
                <h5 className={'description_year'}>Year</h5>
                <h5 className={'description_time'}>Time</h5>
            </div>
            <p className={'description'}>Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two
                hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving
                Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when
                Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by
                Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising
                of a series of funny, bizarre and uncalled-for incidents.—Soumitra</p>
        </div>
    </div>
);

export default MovieDescription;
