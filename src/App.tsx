import { useState } from 'react'
import { GitHub, Instagram, LinkedIn, Email, Resume } from './components/svgs.tsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        {/* sticky, do gradient stroke w/ non sticky background element? or numbers idk */}
        <h1>Hey! I'm Andrew.</h1>
        <h2>CS Undergrad @ Emory</h2>
        <p>Currently combatting procrastination and imposter syndrome :P</p>
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Involvement</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', fill: 'black'}}>
          <GitHub />
          <Instagram />
          <LinkedIn />
          <Email />
          <Resume />
        </div>
      </header>
    </>
  )
}

export default App
