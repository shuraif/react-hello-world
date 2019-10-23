import React from "react";

// function Greet() {
//   return <h1>hello shuraif</h1>;
// }

export const Greet = props => (
  <h1>
    hello {props.name}
    {props.dev}
  </h1>
);
