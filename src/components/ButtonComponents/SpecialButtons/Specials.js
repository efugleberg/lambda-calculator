import React, { useState } from "react";

//import any components needed
import SpecialButton from './SpecialButton.js';
import { specials } from "../../../data.js";

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialsState.map((special, idx) => (
        <SpecialButton
          key={idx}
          special={special}
          clearDisplay={props.clearDisplay}
        />
      ))}
    </div>
  );
};

export default Specials
