import React from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objectArray: [
                { key: "Option 1", cat: "Group 1" },
                { key: "Option 2", cat: "Group 1" },
                { key: "Option 3", cat: "Group 1" },
                { key: "Option 4", cat: "Group 2" },
                { key: "Option 5", cat: "Group 2" },
                { key: "Option 6", cat: "Group 2" },
                { key: "Option 7", cat: "Group 2" }
            ]
        };
        this.style = {
            chips: {
                background: "red"
            },
            searchBox: {
                border: "none",
                "border-bottom": "1px solid blue",
                "border-radius": "0px"
            },
            multiselectContainer: {
                color: "red"
            }
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        this.selectedValues.push({ key: "Option 3", cat: "Group 1" });
    }

    render() {
        const {objectArray, selectedValues } = this.state;
        return (
            <div className="App">

                <Multiselect
                    options={objectArray}
                    displayValue="key"
                    showCheckbox={true}
                />
            </div>
        );
    }
}
