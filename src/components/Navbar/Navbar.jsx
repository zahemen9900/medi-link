import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><h1>MMMedical</h1></Link>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/services">For Medical Facilitators</Link></li>
          <li><Link to="/about">For Agent Travelers</Link></li>
          <li><Link to="/contact">Resources</Link></li>
          <div className="nav-buttons">
            <Link to="/login" className="login-btn">Login</Link>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
