import React from "react";
import BasicForm from "../BasicForm/BasicForm";
import '../../style/AddMovie/addmovie.css'
const AddMovie: React.FC = () => (
    <div className={'add_movie'}>
        <h3 className={'topic'}>ADD MOVIE</h3>
        <BasicForm/>
    </div>
);

export default AddMovie;
