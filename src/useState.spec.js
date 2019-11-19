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
    expect(typeof setValue).toEqual("function");
  });

  // it("should update value when calling setValue", () => {
  //   // First render
  //   let [value, setValue] = useState(42);
  //   console.log(statesCache);
  //   setValue(value + 1);
  //
  //   // setter called => second render
  //   [value, setValue] = useState(42);
  //   console.log(statesCache);
  //   expect(value).toEqual(43);
  // });

  // it("should be able to handle several states at the same time", () => {
  //   // first render
  //   let [counter, setCounter] = useState(11);
  //   let [error, setError] = useState();
  //   console.log(statesCache);
  //   setCounter(counter - 1);
  //
  //   // setter called => rerender
  //   [counter, setCounter] = useState(11);
  //   [error, setError] = useState();
  //   console.log(statesCache);
  //
  //   setError("You can't go higher");
  //
  //   // setter called => rerender
  //   [counter, setCounter] = useState(11);
  //   [error, setError] = useState();
  //   console.log(statesCache);
  //
  //   expect(counter).toEqual(10);
  //   expect(error).toEqual("You can't go higher");
  // });

  // it.skip("having conditional useState screws everything", () => {
  // let error, setError, counter, setCounter, otherValue, setOtherValue;
  //
  // // first render
  // [counter, setCounter] = useState(9);
  // if (counter <= 9) {
  //   [error, setError] = useState("Forbidden value");
  // }
  // [otherValue, setOtherValue] = useState(42);
  // console.table(statesCache);
  // setCounter(counter + 1);
  //
  // // setter called => rerender
  // [counter, setCounter] = useState(9);
  // if (counter <= 9) {
  //   [error, setError] = useState();
  // }
  // [otherValue, setOtherValue] = useState(42);
  // console.table(statesCache);
  //
  // expect(otherValue).toEqual("Forbidden value");
  // });
});
