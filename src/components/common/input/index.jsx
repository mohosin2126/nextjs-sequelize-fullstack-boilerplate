import React from "react";
import "./index.css";

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    );
}

export default Input;