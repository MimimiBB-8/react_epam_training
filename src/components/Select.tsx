import React, { useState } from "react";

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
  },
  select: {
    padding: 5,
    width: 200,
  },
  result: {
    marginTop: 30,
  },
};

const Selection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handelSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  return (
    <div style={styles.container}>
      <select onChange={handelSelectChange} style={styles.select}>
        <option selected disabled>
          Choose one
        </option>
        <option value="BMV">BMV</option>
        <option value="Reno">Reno</option>
        <option value="Audi">Audi</option>
      </select>
      {selectedOption && <h2 style={styles.result}>{selectedOption}</h2>}
    </div>
  );
};

export default Selection;
