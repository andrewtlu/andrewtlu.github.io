import { useState } from 'react'
import { Socials } from './components/svgs.tsx'
import './App.css'
import { ExperiencePane } from './components/panes.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <header>
        {/* sticky, do gradient stroke w/ non sticky background element? or numbers idk */}
        <div className='header-text'>
          {/* TODO: link to own website */}
          <h1>Hey! I'm Andrew.</h1>
          <h2>CS Undergrad @ Emory</h2>
          <p className='body'>Currently combatting procrastination and imposter syndrome :P</p>
          <nav>
            <ul className='small'>
              {/* TODO: animations */}
              <li>
                About
              </li>
              <li>
                Experience
              </li>
              <li>Involvement</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <Socials />
      </header>
      <main>
        <section id='about'>
          <p className='body'>
            I'm a second year student studying CS at Emory University with a passion for backend dev. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec augue id nibh aliquam vulputate. Aenean sem tortor, vulputate vel laoreet ac, malesuada eget ante. Vivamus aliquet vulputate malesuada.
          </p>
          <p className='body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec augue id nibh aliquam vulputate. Aenean sem tortor, vulputate vel laoreet ac, malesuada eget ante. Vivamus aliquet vulputate malesuada.
          </p>
          <p className='body'>
            While I'm not working on a problem set or programming, you can find me backpacking, hanging out with friends, playing guitar for RUF Emory, or tackling some quests on my 3 year old Sevtech Ages save.
          </p>
        </section>
        
        <div className='startline'></div>

        <section id='experience' className='line'>
          <ExperiencePane
            pos='Software Engineer'
            employer='Kerygma Digital'
            date='Jun 2023 - Aug 2023'
            desc={'Developed and improved BibleBot\'s easy quick reference features for 4m+ users across 51,000+ Discord servers, \nReduced service response latency by 60% (~400 ms) by implementing a custom configurable time-to-live HTTP cache'}
            skills={['C#', 'ASP.NET', 'HTTP', 'Git']}
          />

          <ExperiencePane
            pos='Software Engineer'
            employer='Kerygma Digital'
            date='Jun 2023 - Aug 2023'
            desc={'Developed and improved BibleBot\'s easy quick reference features for 4m+ users across 51,000+ Discord servers, \nReduced service response latency by 60% (~400 ms) by implementing a custom configurable time-to-live HTTP cache'}
            skills={['C#', 'ASP.NET', 'HTTP', 'Git']}
          />

          <ExperiencePane
            pos='Software Engineer'
            employer='Kerygma Digital'
            date='Jun 2023 - Aug 2023'
            desc={'Developed and improved BibleBot\'s easy quick reference features for 4m+ users across 51,000+ Discord servers, \nReduced service response latency by 60% (~400 ms) by implementing a custom configurable time-to-live HTTP cache'}
            skills={['C#', 'ASP.NET', 'HTTP', 'Git']}
          />
        </section>

        <section id='involvement' className='line'>
          test
        </section>

        <section id='projects' className='line'>
          test
        </section>

        <section id='contact' className='line'>
          test
        </section>

        <div className='endline'></div>
      </main>
    </div>
  )
}

export default App
