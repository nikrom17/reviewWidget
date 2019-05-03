import React from "react";

import classes from "./Selector.css";

/*
  Custom Selector Component
  Functionality
    - selector description
    - optgroup 
    - designed to be customizable from JSON data
*/

const selector = (props) => {
  let description = null;
  let optgroup = null

  if (props.description) {
      description = <p className={classes.description}>{props.description}</p>
  } 
  if (props.optgroup) {
      optgroup = <optgroup label={props.optgroup}></optgroup>
  }

  return (
    <div className={classes.selectorContainer}>
      {description}
      <select
        className={classes.selector}
        onChange={props.changed}
        value={props.value}>
        {optgroup}
        {props.options.map(option => (
          <option value={option.value} key={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
}

export default selector;