import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import './Navbar.css';




const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
      <nav className="navbar">
        <div className="container">
            <div className="logo">
                {/* Logo Here */}
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
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
        </div>
    </nav>
    )
}

export default Navbar