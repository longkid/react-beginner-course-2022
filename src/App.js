import "./App.css";
import { useState } from "react";

// Episode 4: UseState Hook | States in React Tutorial
// Tutorial: https://www.youtube.com/watch?v=iBfr6eOcCMg&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&index=4
function App() {
  /*   // let age = 0;
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    // age = age + 1;
    // console.log(age);
    setAge(age + 1);
  };

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  ); */

  /* const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <p>{inputValue}</p>
    </div>
  ); */

  /* const [showText, setShowText] = useState(true)

  return (
    <div>
      <button onClick={() => {setShowText(!showText)}}>Show/Hide</button>
      {showText && <h1>HI MY NAME IS PEDRO</h1>}
    </div>
  ) */

  /* const [textColor, setTextColor] = useState("black");

  return (
    <div>
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        Change text color
      </button>
      {<h1 style={{ color: textColor }}>HI MY NAME IS PEDRO</h1>}
    </div>
  ); */

  // Exercise
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to Zero
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
