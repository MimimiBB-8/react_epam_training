import React from "react";
import '../../style/Header/searchform.css'
import Button from "../Button/Button";

const SearchForm: React.FC = () => (
    <form>
        <input type={'text'} placeholder={'What do you want to watch?'}/>
        <Button title={'search'} classname={''}/>
    </form>
);

export default SearchForm;
