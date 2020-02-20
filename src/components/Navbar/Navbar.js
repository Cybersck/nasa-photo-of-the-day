import React from "react";
import "./nav.css";

function Navbar() {
    return(
    <nav className="navbar navbar-expand-sm">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"/>
        <h1 className="ml-auto mr-auto">Nasa Photo of the Day!</h1>
    </nav> 
    )
}

export default Navbar;