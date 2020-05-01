import React from "react";

const validation = (props) => {
  return (
    <div>
      {props.inputtext > 5 ? <p> Text long enough</p> : <p> Too short!!! </p>}
    </div>
  );
};

export default validation;
