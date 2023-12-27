import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='content'>
            <div className='message'>
                <p><a target='_blank' rel='noreferrer' href='https://github.com/andrewtlu/andrewtlu.github.io'>Made with &lt;3</a></p>
                <p><a target='_blank' rel='noreferrer' href='https://github.com/andrewtlu'>&copy;2023 Andrew Lu</a></p>
            </div>
            <ul className='foot-links'>
                <Link to='/about'><li>about</li></Link>
                <Link to='/contact'><li>contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer