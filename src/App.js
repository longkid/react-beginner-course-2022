import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["Jessica", "Jake", "Jerry", "Jasmine"]}
      />
    </div>
  );
}

export default App;
