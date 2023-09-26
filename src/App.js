import "./App.css";

// Episode 2: JSX, Components, Props
function App() {
  return (
    <div className="App">
      <User name="Pedro" age={21} email="pedro@pedro.com" />
      <User name="Jake" age={29} email="jake@pedro.com" />
      <User name="Jessica" age={190} email="jessica@pedro.com" />
    </div>
  );
}

// User component
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

export default App;
