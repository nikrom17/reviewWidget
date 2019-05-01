import React from 'react';
import classes from './Selector.css';

const selector = (props) => {
    let inputElement = null;
    let description = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }
    if (props.descrption) {
        description = <p className={classes.Header}>{props.header}</p>;
    }
    inputElement = (
        <select
            className={inputClasses.join(' ')}
            onChange={props.changed}
            readOnly={props.readOnly}
            value={props.value}>
            <optgroup label = "Sort Reviews By:"></optgroup>
            {props.elementConfig.options.map(option => (
                <option value={option.value} key={option.value}>
                    {option.displayValue}
                </option>
            ))}
        </select>);
           

    return (
        <div className={classes.Input}>
            {/* <label className={classes.Label}>{props.label}</label> */}
            {header}
            {inputElement}
        </div>
    );
}

export default selector;