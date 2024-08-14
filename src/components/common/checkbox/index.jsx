import React from "react";
import "./index.css";

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <label className="form-checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span>{label}</span>
        </label>
    );
}

export default Checkbox;