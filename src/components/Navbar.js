import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [transition, setTransition] = useState(false);
  const links = document.querySelector('.links');

  window.addEventListener('resize', function() { // disable transition when resizing
    setTransition(false);
  });
  // TODO: hamburger flippy thingy (https://www.youtube.com/watch?v=gAGcjlJyKk0)
  // TODO: smooth open

  return (
    <nav>
      <div className='navbar'>
        {/* combine logo/hamburger for easier responsive */}
        <div class='main'>
          <NavLink to='/'>
            <div className='logo'>
              {/* Add logo here */}
              atl
            </div>
          </NavLink>

          <div className='toggleMenu' onClick={() => {
            setExpandNavbar((prev) => !prev);
            setTransition(true);
          }} id={expandNavbar && 'active'}>
            <div className='burger top'></div>
            <div className='burger bottom'></div>
          </div>
        </div>
        
        <ul className={'links ' + (transition && 'transition')} id={expandNavbar && 'active'}>
          <NavLink to='/about'><li>about</li></NavLink>
          <NavLink to='/projects'><li>projects</li></NavLink>
          <NavLink to='/contact'><li>contact</li></NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar