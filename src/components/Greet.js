import React from "react";

// function Greet() {
//   return <h1>hello shuraif</h1>;
// }

export const Greet = props => (
 <div> <h1>
    hello {props.name}</h1>{props.dep}
    {props.children}
    
    </div>
);
