import React, { useMemo, useState } from "react";

const UseMemoHookComponent = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // without useMemo
  // const doubleNumber = slowFunction(number);

  // with useMemo
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // Stops Referencial Equality
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        gap: "20px",
      }}
    >
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default UseMemoHookComponent;

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
