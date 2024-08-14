import React from "react";
import "./index.css";

const Card = ({ title, children }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;