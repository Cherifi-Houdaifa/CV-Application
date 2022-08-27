import React from "react";
import "../styles/NavBar.css";

function NavBar({ title }) {
    return (
        <nav>
            <h1>{ title }</h1>
        </nav>
    );
}

export default NavBar;