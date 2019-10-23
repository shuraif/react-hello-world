import React from "react";
import ReactDOM from "react-dom";
import { Greet } from "./components/Greet";
import "./styles.css";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <Greet name="Alien" dep=" dev" ><p>this is children</p></Greet>
      <Greet name="Geek" dep="coding" >
        <button>click me</button>
      </Greet>
       <Welcome name="shuraif" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
