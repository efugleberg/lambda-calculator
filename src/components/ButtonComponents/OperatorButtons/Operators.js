import React, { useState } from "react";

//import any components needed
import { operators } from "../../../data.js";
import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state

  const [operatorsState] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {operatorsState.map((operator, idx) => (
        <OperatorButton
          key={idx}
          operator={operator}
          addDisplay={props.addDisplay}
        />
      ))}
    </div>
  );
};

export default Operators;
