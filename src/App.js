import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchAge = (name) => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>
      setPredictedAge(res.data)
    );
  };

  return (
    <div className="App">
      <input
        placeholder="Input your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={() => fetchAge(name)}>Predict Age</button>

      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;
