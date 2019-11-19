import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Counter() {
  const [counter, setCounter] = useState(5);
  const [error, setError] = useState();

  return (
    <div className="App">
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
            setError(null);
          } else setError("value is too low");
        }}
      >
        ⬇
      </button>
      {counter}
      <button
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

export let statesCache = [
  // 11
  // undefined
];
let stateIndex = -1;
export function useState(initialValue) {
  const stateId = ++stateIndex;
  if (statesCache[stateId]) {
    return statesCache[stateId];
  }

  function setValue(newValue) {
    statesCache[stateId][0] = newValue;
    rerender();
  }
  const result = [initialValue, setValue];
  statesCache.push(result);
  return result;
}

export function resetCache() {
  statesCache = [];
  stateIndex = -1;
}

function rerender() {
  stateIndex = -1;
  ReactDOM.render(<Counter />, document.getElementById("root"));
}

rerender();
