import React from "react";
import "./index.css";

const Select = ({ value, onChange, children }) => {
    return (
        <select className="form-select" value={value} onChange={onChange}>
            {children}
        </select>
    );
}