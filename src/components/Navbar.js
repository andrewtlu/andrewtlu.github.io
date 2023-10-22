import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/'>
          <div className='logo'>
            {/* Add logo here */}
            atl
          </div>
        </Link>
        <div className='toggleMenu'>
          {/* Add hamburger here */}
          toggleMenu
        </div>
        <ul className='links'>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/projects'>projects</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar