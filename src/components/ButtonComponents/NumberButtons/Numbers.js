import React from "react";
import { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js";


import { numbers } from "../../../data";

//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  return (
    <div>
      {numberState.map((item, idx) => 
        <NumberButton key={idx} button={item} changeDisplay = {props.changeDisplay} />
      )}
    </div>
  );
};

export default Numbers;
