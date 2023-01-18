import style from './Searchform.module.scss'
import Button from "../Button/Button";

const SearchForm = () => (
    <form>
        <input type={'text'} placeholder={'What do you want to watch?'}/>
        <Button title={'search'} classname={style.search_button}/>
    </form>
);

export default SearchForm;
