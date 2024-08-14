import React from "react";
import "./index.css";

const Table = ({ headers, children }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}

export default Table;