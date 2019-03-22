import { useState } from "react";

export const useInputValue = (initialValue = "") => {
  // Store our own state on the input
  const [inputValue, setInputValue] = useState(initialValue);

  // Return the value held in state
  // Expose the changeInput function to hold state
  // Expost the clearInput function to clear state
  // Use keyInput to update state only when user presses enter key
  return {
    inputValue,
    changeInput: value => setInputValue(value),
    clearInput: _ => setInputValue(""),
    defaultInput: _ => setInputValue(initialValue),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(event.target.value);
        return true;
      }
      return false;
    }
  };
};
