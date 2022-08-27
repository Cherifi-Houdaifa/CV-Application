import React from "react";
import "../styles/Info.css";

function Info ({ title, children }) {
    return (
        <div className="info">
            <h1>{title}</h1>
            <hr />
            <div className="inputs">
                {children}
            </div>
        </div>
    );
}
export default Info;