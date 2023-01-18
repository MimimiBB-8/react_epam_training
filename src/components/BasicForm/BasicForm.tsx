import FormItem from "../BasicForm/FormItem";
import Button from "../Button/Button";
import '../../style/BasicForm/basicform.css'
import SelectInput from "./SelectInput";
const BasicForm = () => (
    <>
        <form className={'basic_form'}>
            <div style={{display: 'flex'}}>
                <div className={'first_colon'}>
                    <FormItem title={'Title'} type={'text'} placeholder={'name'}/>
                    <FormItem title={'Movie URl'} type={'url'} placeholder={'https://'}/>
                    <label className={'input_title'}>
                        Genre
                        <SelectInput/>
                    </label>
                </div>
                <div className={'second_colon'}>
                    <FormItem title={'RELEASE DATE'} type={'date'} placeholder={'Select date'}/>
                    <FormItem title={'RATING'} type={'text'} placeholder={'7.8'}/>
                    <FormItem title={'RUNTIME'} type={'text'} placeholder={'minutes'}/>
                </div>
            </div>
            <FormItem title={'OVERVIEW'} type={'input'} placeholder={'Movie description'} classname={'textarea'}/>
            <div className={'group_button'}>
                <Button title={'reset'} classname={'reset_button'}/>
                <Button title={'submit'} />
            </div>
        </form>
    </>
);

export default BasicForm;
