import React from "react";
import { useTheme, useThemeUpdate } from "../utils/ThemeContext";

const FunctionalContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#333" : "#ccc",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}></button>
      <div style={themeStyles}>Functional Component</div>
    </>
  );
};

export default FunctionalContextComponent;
