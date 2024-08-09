import React, { useState, useCallback } from "react";
import List from "../components/List";

const UseCallBackHookComponent = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Change Theme
      </button>
      <List getItem={getItem} />
    </div>
  );
};

export default UseCallBackHookComponent;
