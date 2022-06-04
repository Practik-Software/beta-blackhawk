import React, { useState } from 'react';


const Navbar = (props) => {
    const toggleMode = e => {
        e.preventDefault();
        props.setDarkMode(!props.darMode)
    };
    return(
        <nav className="navbar">
            <h1>Project Blackhawk</h1>
            <div>
                
            </div>



        </nav>
    )

}

export default Navbar;