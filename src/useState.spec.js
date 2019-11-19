import { resetCache, statesCache, useState } from "./index";

jest.mock("react-dom", () => ({
  render: jest.fn()
}));

describe("useState", () => {
  beforeEach(() => {
    resetCache();
  });
  it("should return an array containing the initial value and a function", () => {
    const [value, setValue] = useState(42);
    expect(value).toEqual(42);
  });

  it("should update value when calling setValue", () => {
    // First render
    let [value, setValue] = useState(42);
    setValue(value + 1);

    // setter called => second render
    [value, setValue] = useState(42);
    expect(value).toEqual(43);
  });

  it("should be able to handle several states at the same time", () => {
    // first render
    let [counter, setCounter] = useState(11);
    let [error, setError] = useState();
    setCounter(counter - 1);

    // setter called => rerender
    [counter, setCounter] = useState(11);
    [error, setError] = useState();
    setError("You can't go higher");

    // setter called => rerender
    [counter, setCounter] = useState(11);
    [error, setError] = useState();

    expect(counter).toEqual(10);
    expect(error).toEqual("You can't go higher");
  });

  it("having conditional useState screws everything", () => {
    let error, setError, counter, setCounter, otherValue, setOtherValue;

    // first render
    [counter, setCounter] = useState(9);
    if (counter <= 9) {
      [error, setError] = useState("Forbidden value");
    }
    [otherValue, setOtherValue] = useState(42);
    console.table(statesCache);
    setCounter(counter + 1);

    // setter called => rerender
    [counter, setCounter] = useState(9);
    if (counter <= 9) {
      [error, setError] = useState();
    }
    [otherValue, setOtherValue] = useState(42);
    console.table(statesCache);

    expect(otherValue).toEqual("Forbidden value");
  });
});
