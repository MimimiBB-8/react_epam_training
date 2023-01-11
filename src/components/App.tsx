import React from "react";
import Count from "./Count";
import Selection from "./Select";

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const App: React.FC = () => (
  <div style={styles.container}>
    <Selection />
    <Count />
  </div>
);

export default App;
