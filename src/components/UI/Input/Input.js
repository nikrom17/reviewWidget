import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    let header = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }
    if (props.header) {
        header = <p className={classes.Header}>{props.header}</p>;
    }
    if (props.elementType === 'img') {
        inputClasses.push(classes.Image)
    } else if (props.elementType === 'textarea') {
        inputClasses.push(classes.Textarea);
    }

    switch (props.elementType) {
        case ( 'input' ):
            inputElement = <input
                readOnly={props.readOnly}
                className={inputClasses.join(' ')}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ( 'file' ):
            inputElement = <input
                readOnly={props.readOnly}
                className={inputClasses.join(' ')}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value.value} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea 
                className={inputClasses.join(' ')}
                readOnly={props.readOnly}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    onChange={props.changed}
                    readOnly={props.readOnly}
                    value={props.value}>
                    {props.elementConfig.options.map(option => (
                        <option value={option.value} key={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>);
            break;
            case ( 'img' ):
            inputElement = (
                <img
                    className={inputClasses.join(' ')}
                    src={props.src}
                    alt={props.alt} /> );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                readOnly={props.readOnly}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            <div>
                {header}
                {inputElement}
            </div>
        </div>
    );
}

export default input;