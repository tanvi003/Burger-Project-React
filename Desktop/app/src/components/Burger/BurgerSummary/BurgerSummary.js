import React from "react";

const BurgerSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3> Your Order</h3>
      <p> A delicious Burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p> Continue to CheckOut?</p>
    </div>
  );
};

export default BurgerSummary;
