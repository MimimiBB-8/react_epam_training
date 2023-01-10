import { useState } from "react";

function Selection() {
    const texts = ['Audi', 'BMW', 'Reno', 'Ferrari'];
    const [value, setValue] = useState('');

    const options = texts.map((text, index) => {
        return <option key={ index } value={ index }> { text } </option>;
    });

    return <div style={{margin: '20px'}}>
        <select value={value} onChange={event => setValue(event.target.value)}>
            {options}
        </select>
        <p>
            Your choice: {texts[value]}
        </p>
    </div>;
}

export default Selection;