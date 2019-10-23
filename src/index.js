import React from "react";
import ReactDOM from "react-dom";
import { Greet } from "./components/Greet";
import "./styles.css";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
