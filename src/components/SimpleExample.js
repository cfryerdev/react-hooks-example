import React, { useState, useEffect } from "react";

const smallStyle = {
  fontSize: 12,
  color: "#777",
  display: "block"
};

export default _ => {
  // Allows us to use state in function components
  const [name, setName] = useState("No Name Set");
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.clear();
    console.log(`Keystrokes: ${count}`);
  });

  // Our function component using the hook
  return (
    <div>
      <h3 style={{ margin: 0 }}>
        Simple Hook Example
        <small style={smallStyle}>Type to update state</small>
      </h3>

      <p>{name}</p>

      <input
        placeholder="Enter Your Name"
        onChange={event => {
          setName(event.target.value);
          setCount(++count);
        }}
      />
    </div>
  );
};
