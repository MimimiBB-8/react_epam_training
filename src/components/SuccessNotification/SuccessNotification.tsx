import React from "react";
import  './notification.css'
import CloseButton from "../CloseButton/CloseButton";
const SuccessNotification = () => (
    <div className={'success_notification'}>
        <CloseButton/>
        <div className={'done'}>
            <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.8347L13.1175 28L38 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
            </svg>
        </div>
        <h2>congratulations</h2>
        <p>The movie has been added to <br/>
            database successfully </p>
    </div>
);

export default SuccessNotification;
