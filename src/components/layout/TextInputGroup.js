import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

const TextInputGroup = ({
    label, 
    name, 
    type, 
    placeholder, 
    value, 
    onChange,
    errors
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className={classnames("form-control", {
                    "is-invalid": errors
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            <div className="invalid-feedback">{errors}</div>
        </div>
        
    );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;
