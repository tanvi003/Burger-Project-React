import React from "react";

const char = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center",
  };

  return (
    <div style={style} onClick={props.clicked} onClick={props.clicked}>
      {props.char1}
    </div>
  );
};

export default char;
