import React from "react";
import { ReactSVG } from "react-svg";
const done = require('../../img/svg/done.svg');

const doneStyle = {
    color: "#fff",
    borderColor: "#00f",
    backgroundImage: done,
    width: '40px',
    height:'40px'
};
const SuccessNotification = () => (
    <div>
        <div className={'done'} style={doneStyle}>
        </div>
        <h2>congratulations</h2>
        <p>The movie has been added to
            database successfully </p>
    </div>
);

export default SuccessNotification;
