import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <NavLink to='/'>
          <div className='logo'>
            {/* Add logo here */}
            atl
          </div>
        </NavLink>
        <div className='toggleMenu'>
          {/* Add hamburger here */}
          toggleMenu
        </div>
        <ul className='links'>
          <NavLink to='/about'><li>about</li></NavLink>
          <NavLink to='/projects'><li>projects</li></NavLink>
          <NavLink to='/contact'><li>contact</li></NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar