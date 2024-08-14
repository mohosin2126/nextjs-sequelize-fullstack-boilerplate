import React from "react";
import "./index.css";

const Form = ({ submitHandler, buttonText = 'Submit', children }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        submitHandler();
    };

    return (
        <form onSubmit={handleSubmit}>
            {children}
            <button type="submit" className="btn btn-primary">
                {buttonText}
            </button>
        </form>
    );
};

export default Form;