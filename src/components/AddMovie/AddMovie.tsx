import BasicForm from "../BasicForm/BasicForm";
import CloseButton from "../CloseButton/CloseButton";
import style from './Addmovie.module.scss'

const AddMovie = () => (
    <div className={style.add_movie}>
        <CloseButton/>
        <h2 className={style.topic}>ADD MOVIE</h2>
        <BasicForm/>
    </div>
);

export default AddMovie;
