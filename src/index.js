import React, { useState } from "react";
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

function rerender() {
  ReactDOM.render(<Counter />, document.getElementById("root"));
}

rerender();
