import React from "react";
import Count from "./Count";
import Selection from "./Select";

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <Selection />
      <Count />
    </div>
  );
};

export default App;

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
