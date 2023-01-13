import React from "react";
import FormItem from "../BasicForm/FormItem";
import Button from "../Button/Button";
import '../../style/BasicForm/basicform.css'

const BasicForm: React.FC = () => (
    <>
        <form >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={'first_colon'}>
                    <FormItem title={'Title'} type={'text'} placeholder={'name'}/>
                    <FormItem title={'Movie URl'} type={'text'} placeholder={'https://'}/>
                    <label>
                        Genre
                        <select>
                            <option selected disabled>
                                Select Genre
                            </option>
                        </select>
                    </label>
                    <div style={{display:"none"}}>
                        <input type={'checkbox'}/>
                        <input type={'checkbox'}/>
                        <input type={'checkbox'}/>
                        <input type={'checkbox'}/>
                    </div>
                </div>
                <div className={'second_colon'}>
                    <FormItem title={'RELEASE DATE'} type={'text'} placeholder={'Select Date'}/>
                    <FormItem title={'RATING'} type={'text'} placeholder={'7.8'}/>
                    <FormItem title={'RUNTIME'} type={'text'} placeholder={'minutes'}/>
                </div>
            </div>
            <FormItem title={'OVERVIEW'} type={'textarea'} placeholder={'Movie description'}/>
            <div className={'group_button'}>
                <Button title={'reset'} classname={'reset_button'}/>
                <Button title={'submit'} />
            </div>
        </form>
    </>
);

export default BasicForm;
