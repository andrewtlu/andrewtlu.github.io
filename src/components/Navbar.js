import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [transition, setTransition] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  window.addEventListener('resize', function() { // disable transition when resizing
    setTransition(false);
  });
  document.addEventListener('click', ({target}) => {
    if (!target.matches('.navbar *')) {
      setExpandNavbar(false);
    }
  });

  return (
    <nav>
      <div className='navbar'>
        {/* combine logo/hamburger for easier responsive */}
        <div class='main'>
          <NavLink to='/'>
            <div className='logo'>
              {/* Add logo here */}
              al.
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
          <NavLink to='/contact'><li>contact</li></NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar