import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const statesCache = [];
let hookIndex = 0;

function _useState(initialValue) {
  const hookId = hookIndex++;

  if (statesCache[hookId]) {
    return statesCache[hookId];
  }

  const setValue = newValue => {
    statesCache[hookId][0] = newValue;
    rerender();
  };

  const localState = [initialValue, setValue];
  statesCache[hookId] = localState;
  return localState;
}

export default function Counter() {
  const [counter, setCounter] = _useState(5);
  const [error, setError] = _useState();

  return (
    <div className="App">
      <button
        aria-label="decrement"
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
            setError(null);
          } else setError("value is too low");
        }}
      >
        ⬇
      </button>
      <span>{counter}</span>
      <button
        aria-label="increment"
        onClick={() => {
          if (counter < 9) {
            setCounter(counter + 1);
            setError(null);
          } else setError("value is too high");
        }}
      >
        ⬆
      </button>
      {error && <h3>{error}</h3>}
    </div>
  );
}

function rerender() {
  hookIndex = 0;
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Counter />, rootElement);
  console.log(statesCache);
}

// rerender();
