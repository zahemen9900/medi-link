import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MMMedical</h1>
      </div>
      <ul className="nav-links">
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