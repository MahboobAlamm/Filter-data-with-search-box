import "./styles.css";
import { useState } from "react";

export default function App() {
  const data = ["aditya", "editya", "yditya"];

  const [filt, setFilt] = useState("");

  return (
    <div className="App">
      <h1>Filtering Data on search</h1>
      <input
        type="search"
        onChange={(e) => {
          setFilt(e.target.value);
        }}
      />

      {data
        .filter((item) => item.startsWith(filt))
        .map((item) => (
          <h1>{item}</h1>
        ))}
    </div>
  );
}
