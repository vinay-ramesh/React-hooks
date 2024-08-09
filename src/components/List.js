import React, { useState, useEffect } from "react";

const List = (props) => {
  const { getItem } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItem());
    console.log("updating items");
  }, [getItem]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
