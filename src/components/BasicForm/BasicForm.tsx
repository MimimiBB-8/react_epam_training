import FormItem from "../BasicForm/FormItem";
import Button from "../Button/Button";
import style from './Basicform.module.scss'

const BasicForm = () => (
    <>
        <form>
            <div className={style.colon_wrapper}>
                <div className={style.first_colon}>
                    <FormItem title={'Title'} type={'text'} placeholder={'name'}/>
                    <FormItem title={'Movie URl'} type={'url'} placeholder={'https://'}/>
                    <label className={style.input_title}>
                        Genre
                        <select>
                            <option selected disabled>
                                Select Genre
                            </option>
                        </select>
                    </label>
                </div>
                <div className={style.second_colon}>
                    <FormItem title={'RELEASE DATE'} type={'date'} placeholder={'Select Date'}/>
                    <FormItem title={'RATING'} type={'text'} placeholder={'7.8'}/>
                    <FormItem title={'RUNTIME'} type={'text'} placeholder={'minutes'}/>
                </div>
            </div>
            <FormItem title={'OVERVIEW'} type={'textarea'} placeholder={'Movie description'}/>
            <div className={style.group_button}>
                <Button title={'reset'} classname={style.reset_button}/>
                <Button title={'submit'}/>
            </div>
        </form>
    </>
);

export default BasicForm;
