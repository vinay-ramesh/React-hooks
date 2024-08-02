import React, { useEffect, useState, useRef } from "react";

const UseRefComponent = () => {
  const [name, setName] = useState("");
  const myRef = useRef("");
  useEffect(() => {
    myRef.current = name;
  }, [name]);

  //   myRef stores the previous value of name state variable
  return (
    <>
      <input
        ref={myRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>My current name is :{name}</h3>
      <h3>My previous name is :{myRef.current}</h3>
    </>
  );
};

export default UseRefComponent;
