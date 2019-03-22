import React from "react";
import { useInputValue } from "../hooks/InputValueHook";

const smallStyle = {
  fontSize: 12,
  color: "#777",
  display: "block"
};

export default _ => {
  // Use our custom hook with our own functions
  const {
    inputValue,
    changeInput,
    clearInput,
    defaultInput,
    keyInput
  } = useInputValue("No Name Set");

  // Our function component using our hook
  return (
    <div>
      <h3 style={{ margin: 0 }}>
        Custom Hook Example
        <small style={smallStyle}>Press Enter to update state</small>
      </h3>
      <p>{inputValue}</p>
      <input
        placeholder="Enter Your Name"
        onKeyPress={event => keyInput(event, changeInput)}
      />{" "}
      <button onClick={defaultInput}>Default</button>{" "}
      <button onClick={clearInput}>Clear</button>
    </div>
  );
};
