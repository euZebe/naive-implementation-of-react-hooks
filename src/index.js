import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const statesCache = [];
let index = 0;

function useState(initialValue) {
  const id = index++;

  if (statesCache[id]) {
    return statesCache[id];
  }

  const setValue = newValue => {
    statesCache[id][0] = newValue;
    console.log("new value is", newValue);
    rerender();
  };
  const state = [initialValue, setValue];
  statesCache[id] = state;
  return state;
}

function App() {
  console.log("states", statesCache);
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

function rerender() {
  index = 0;
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
}

rerender();
