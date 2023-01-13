import React from "react";
import FormItem from "../BasicForm/FormItem";
import Button from "../Button/Button";
import '../../style/LogIn/login.css'
const LogIn = () => (
    <div className={'background_wrapper'}>
        <div className={'wrapper_log'}>
            <h2>LOG IN</h2>
            <form>
                <FormItem title={'User Id *'} type={'email'} placeholder={'enter user id'}/>
                <FormItem title={'PASSWORD *'} type={'password'} placeholder={'enter password'}/>
                <div className={'group_button'}>
                    <Button classname={'reset_button'} title={'reset'}/>
                    <Button title={'log in'}/>
                </div>
            </form>
            <p className={'note'}>*Mandatory</p>
        </div>
        <h1><span>netflix</span>roulette</h1>
    </div>

);

export default LogIn;
