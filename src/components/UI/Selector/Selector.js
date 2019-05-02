import React from 'react';
import classes from './Selector.css';

const selector = (props) => {
    let description = null;
    let optgroup = null
    const inputClasses = [classes.InputElement];

    if (props.description) {
        description = <p className={classes.description}>{props.description}</p>
    } 
    if (props.optgroup) {
        optgroup = <optgroup label={props.optgroup}></optgroup>
    }

    return (
        <div className={classes.selector}>
            {description}
            <select
                className={inputClasses.join(' ')}
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