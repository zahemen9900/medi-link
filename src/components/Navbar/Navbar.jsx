import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MMMedical</h1>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Overview</a></li>
        <li><a href="/services">For Medical Facilitators</a></li>
        <li><a href="/about">For Agent Travelers</a></li>
        <li><a href="/contact">Resourses</a></li>
        <button>Sign Up</button>
      </ul>
    </nav>
  )
}

export default Navbar