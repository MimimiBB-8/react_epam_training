import { useState } from "react";
import Select, { components } from "react-select";
import FormItem from "../BasicForm/FormItem";
import Button from "../Button/Button";
import './basicform.css'

const BasicForm = () => (
    <>
        <form >
            <div style={{display: 'flex'}}>
                <div className={'first_colon'}>
                    <FormItem title={'Title'} type={'text'} placeholder={'name'}/>
                    <FormItem title={'Movie URl'} type={'url'} placeholder={'https://'}/>
                    <label className={''}>
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
                    <FormItem title={'RELEASE DATE'} type={'date'} placeholder={'Select Date'}/>
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