import React from "react";
import "./index.css";

const Textarea = ({ placeholder, value, row, onChange }) => {
    return (
        <textarea
            className="form-textarea"
            placeholder={placeholder}
            value={value}
            rows={row}
            onChange={onChange}
        />
    );
}