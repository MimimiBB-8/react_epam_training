import React, { useState } from "react";

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
    marginLeft: 50,
  },
  h1: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 5,
    margin: 5,
    border: "solid 1px",
  },
};

const Count: React.FC = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>{count}</h1>
      <button onClick={handleIncrement} style={styles.button}>
        Increment
      </button>
      <button onClick={handleDecrement} style={styles.button}>
        Decrement
      </button>
    </div>
  );
};

export default Count;
