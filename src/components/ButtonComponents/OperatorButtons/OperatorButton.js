import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button onClick={() => props.addDisplay(props.operator.value)}>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton
