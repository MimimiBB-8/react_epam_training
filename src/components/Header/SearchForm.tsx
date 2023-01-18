import React from "react";
import './Searchform.css'
import Button from "../Button/Button";

const SearchForm: React.FC = () => (
    <form>
        <input type={'text'} placeholder={'What do you want to watch?'}/>
        <Button title={'search'} classname={'search_button'}/>
    </form>
);

export default SearchForm;
