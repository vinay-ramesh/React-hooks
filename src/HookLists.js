import React from "react";
import { Link } from "react-router-dom";

const HookLists = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <ul>
        <li>
          <Link to="/useState-hook">useState Hook</Link>
        </li>
        <li>
          <Link to="/useEffect-hook">useEffect Hook</Link>
        </li>
        <li>
          <Link to="/useRef-hook">useRef Hook</Link>
        </li>
      </ul>
    </div>
  );
};

export default HookLists;
