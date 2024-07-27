import React from "react";
import FunctionalContextComponent from "../components/FunctionalContextComponent";
import { ThemeProvider } from "../utils/ThemeContext";

const UseContextComponent = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionalContextComponent />
      </ThemeProvider>
    </>
  );
};

export default UseContextComponent;
