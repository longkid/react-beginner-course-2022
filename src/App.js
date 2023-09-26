import "./App.css";
// import { User } from "./User";

// Episode 3: Ternary Operators, Lists in React, CSS in React
function App() {
  // const age = 17;
  // const isGreen = false;

  // return (
  //   <div className="App">
  //     {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
  //     <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>
  //     {isGreen && <button>THIS IS A BUTTON</button>}
  //   </div>
  // );

  // const names = ["Pedro", "Jake", "Jessica"];
  // return (
  //   <div className="App">
  //     {names.map((name, key) => {
  //       return <h1 key={key}>{name}</h1>;
  //     })}
  //   </div>
  // );

  // const users = [
  //   { name: "Pedro", age: 21 },
  //   { name: "Jake", age: 25 },
  //   { name: "Jessica", age: 45 },
  // ];

  // return (
  //   <div className="App">
  //     {users.map((user, key) => {
  //       return <User name={user.name} age={user.age} />;
  //     })}
  //   </div>
  // );

  // Exercise
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>
      )}
    </div>
  );
}

export default App;
