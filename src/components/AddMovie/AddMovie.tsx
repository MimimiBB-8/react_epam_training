import React from "react";
import BasicForm from "../BasicForm/BasicForm";
import CloseButton from "../CloseButton/CloseButton";
import '../../style/AddMovie/addmovie.css'
const AddMovie = () => (
    <div className={'add_movie'}>
        <CloseButton/>
        <h2 className={'topic'}>ADD MOVIE</h2>
        <BasicForm/>
    </div>
);

export default AddMovie;
