import React from "react";
import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";
import  '../../style/DeletionConfirmation/deletionconfirmation.css'

const DeletionConfirmation = () => (
    <div className={'deletion_confirmation'}>
        <CloseButton/>
        <h2>Delete MOVIE</h2>
        <p>Are you sure you want to delete this movie? </p>
        <Button title={'confirm'} />
    </div>
);

export default DeletionConfirmation;
