import React from "react";
import "./index.css";

const Radio = ({ name, value, onChange }) => {
    return (
        <input
            className="form-radio"
            type="radio"
            name={name}
            value={value}
            onChange={onChange}
        />
    );
}

export default Radio;