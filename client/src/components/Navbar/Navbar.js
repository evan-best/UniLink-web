import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav" id = "navbar">
            <div className="nav-content">
                {/* Logo Here */}
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/getstarted">Get Started</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/support">Support</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar