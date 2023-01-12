import React from "react";
import Button from "../Button/Button";

const LogIn: React.FC = () => (
    <div>
        <h2>LOG IN</h2>
        <form>
            <label>
                <input type={"email"} />
            </label>
            <label>
                <input type={"password"} />
            </label>
            {/*<Button />*/}
            {/*<Button />*/}
        </form>
    </div>
);

export default LogIn;
