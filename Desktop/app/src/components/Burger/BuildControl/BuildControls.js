import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const BuildControls = (props) => {
  return (
    <div className={classes.col}>
      <div className={classes.BuildControl1}>
        <p className={classes.p}>
          <strong>Current Price: {props.price.toFixed(2)}</strong>
        </p>
        {controls.map((ctrl) => (
          <BuildControl
            key="ctrl.label"
            label={ctrl.label}
            type={ctrl.type}
            added={() => props.ingredientsAdded(ctrl.type)}
            removed={() => props.ingredientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        ))}
      </div>
      <div className={classes.button}>
        <button className={classes.OrderButton} disabled={!props.purchaseable}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default BuildControls;
