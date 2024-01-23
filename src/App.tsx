import { Socials } from './components/svgs.tsx'
import './App.css'
import { ContactPane, ExperiencePane, ProjectPane, InfoPane } from './components/panes.tsx'

function App() {
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

        {/* TODO: gradient, hover effects, smart collapse */}

        <section id='experience' className='line'>
          <div className='narrowcontent'>
            <ExperiencePane
              pos='Software Engineer'
              group='Kerygma Digital'
              date='Jun 2023 - Aug 2023'
              desc={'Developed and improved BibleBot\'s easy quick reference features for 4m+ users across 51,000+ Discord servers, \nReduced service response latency by 60% (~400 ms) by implementing a custom configurable time-to-live HTTP cache'}
              skills={['C#', 'ASP.NET', 'HTTP', 'Git']}
            />

            <ExperiencePane
              pos='Software Engineer'
              group='Kerygma Digital'
              date='Jun 2023 - Aug 2023'
              desc={'Developed and improved BibleBot\'s easy quick reference features for 4m+ users across 51,000+ Discord servers, \nReduced service response latency by 60% (~400 ms) by implementing a custom configurable time-to-live HTTP cache'}
              skills={['C#', 'ASP.NET', 'HTTP', 'Git']}
            />

            <ExperiencePane
              pos='Software Engineer'
              group='Kerygma Digital'
              date='Jun 2023 - Aug 2023'
              desc={'Developed and improved BibleBot\'s easy quick reference features for 4m+ users across 51,000+ Discord servers, \nReduced service response latency by 60% (~400 ms) by implementing a custom configurable time-to-live HTTP cache'}
              skills={['C#', 'ASP.NET', 'HTTP', 'Git']}
            />
          </div>
        </section>

        <section id='involvement' className='line'>
          <div className='narrowcontent'>
            <ExperiencePane
              pos='Project Lead'
              group='Project Emory'
              date='Aug 2023 - Present'
              desc={'Lead development of the RIDEmory project, teaching project engineers technology such as MVC frameworks, Git, and React in order to provide easy access to automatically compiled rideshare information across Emory\'s campus.'}
              skills={['Spring Boot', 'React', 'SCSS', 'Git', 'Flask', 'Figma', 'Canva']}
            />

            <InfoPane text='View full resume' border={true} url='' />
          </div>
        </section>

        <section id='projects' className='line'>
          <div className='projects'>
            <ProjectPane
              name='RIDEmory'
              url=''
              desc='A self-updating database of ride information for Emory students accessible either via the web or GroupMe.'
              img='src/assets/ridemory.png'
              skills={['Spring Boot', 'React', 'SCSS', 'Flask', 'Figma']}
            />

            <ProjectPane
              name='Personal Website'
              url=''
              desc='The personal portfolio website you are currently reading! I built this in order to teach myself frontend software and design skills to better support my project team in Project Emory.'
              img='src/assets/website.png'
              skills={['React', 'TypeScript', 'Figma']}
            />

            <InfoPane text='View my other projects' border={false} url='' />
          </div>
        </section>

        <section id='contact' className='line'>
          <div className='narrowcontent'>
            <ContactPane />
            {/* TODO: prettier contact pane */}
          </div>
        </section>

        <div className='endline'></div>

        <footer className='small'>Made with &lt;3 by yours truly. Designed in Figma, built with React, TypeScript, and Vite. If you're interested, get a sneak peak of my thought process and read the dev log here!</footer>
      </main>
    </div>
  )
}

export default App
