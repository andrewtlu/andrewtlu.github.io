import { Link } from 'react-router-dom';
import { ContactPane, ExperiencePane, ProjectPane, InfoPane } from '../components/panes.tsx'
import { Socials } from '../components/svgs.tsx'
import { useEffect } from 'react';

function debounce(func: Function, delay: number) {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// clear active id
function unselectElements(elements: (Element | null)[]) {
  elements.forEach(unselect => {
    if (unselect instanceof Element) {
      unselect.id = '';
    }
  });
}

function updateNavClicks(navElements: (Element | null)[]) {
  navElements.forEach(element => {
    if (element instanceof Element) {
      element.addEventListener('click', () => {
        unselectElements(navElements);
        element.id = 'active';
      })
    }
  });
}

function Home() {
  useEffect(() => {
    const navElements = [
      document.querySelector('ul.small .about'),
      document.querySelector('ul.small .experience'),
      document.querySelector('ul.small .involvement'),
      document.querySelector('ul.small .projects'),
      document.querySelector('ul.small .contact'),
    ];
    const sections = document.querySelectorAll('section');

    updateNavClicks(navElements);
    // updateIntersection(); // TODO: color changing
    
    const scrollHandler = () => {
      for (let i = 0; i < sections.length; i++) {
        let clientView = sections[i].getBoundingClientRect();
        if (clientView.top <= 0 && clientView.bottom >= 32) {
          // change accent color
          // document.documentElement.style.setProperty('--accent', i % 2 == 1 ? 'var(--accent-1)' : 'var(--accent-2)');
          
          // update nav
          let element = navElements[i]
          if (element instanceof Element) {
            unselectElements(navElements);
            element.id = 'active';
          }

          break;
        }
      }
    };

    document.addEventListener('scroll', debounce(scrollHandler, 250))
  }, []);

  return (
    <div className='content'>
      <header>
        {/* sticky, do gradient stroke w/ non sticky background element? or numbers idk */}
        <div className='header-text'>
          {/* TODO: link to own website */}
          <div>
            <h1>
              <Link to="./">
                Hey! I'm Andrew.
              </Link>
            </h1>
            <h2>CS Undergrad @ Emory</h2>
            <p className='body'>Currently combatting procrastination and imposter syndrome :P</p>
          </div>
          <nav>
            <ul className='small'>
              <li className='about' id='active'>
                <a href="#about">
                  <span className='selection'></span>
                  About
                </a>
              </li>
              <li className='experience'>
                <a href="#experience">
                  <span className='selection'></span>
                  Experience
                </a>
              </li>
              <li className='involvement'>
                <a href="#involvement">
                  <span className='selection'></span>
                  Involvement
                </a>
              </li>
              <li className='projects'>
                <a href="#projects">
                  <span className='selection'></span>
                  Projects
                </a>
              </li>
              <li className='contact'>
                <a href="#contact">
                  <span className='selection'></span>
                  Contact
                </a>
              </li>
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

export default Home