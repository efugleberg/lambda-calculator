import React from "react";

const NumberButton = props => {
  return (
    <>
    <button value={props.button} onClick={() => props.changeDisplay(props.button)}>{props.button}</button>
    </>
  );
};

export default NumberButton;
