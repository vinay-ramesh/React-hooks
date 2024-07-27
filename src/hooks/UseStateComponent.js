import { useState } from "react";

const runExpensiveFunction = () => {
  console.log("Expensive func");
  return 0;
};

function UseStateComponent() {
  const [expensiveVariable, setExpensiveVariable] = useState(() =>
    runExpensiveFunction()
  );
  // This avoids loading the state variable after every re-rendering
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseStateComponent;
