import { Link } from 'react-router-dom';
import { ContactPane, ExperiencePane, ProjectPane, InfoPane, SectionPane } from '../components/panes.tsx'
import { Socials } from '../components/svgs.tsx'
import { useEffect } from 'react';
import { ResetSkills } from '../components/buttons.tsx';
import experience from '../assets/experience.json';
import projects from '../assets/projects.json';

function debounce(func: Function, delay: number) {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

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
    
    const scrollHandler = () => {
      for (let i = 0; i < sections.length; i++) {
        const clientView = sections[i].getBoundingClientRect();
        if (clientView.top <= 0 && clientView.bottom >= 32) {
          // change accent color
          // document.documentElement.style.setProperty('--accent', i % 2 == 1 ? 'var(--accent-1)' : 'var(--accent-2)');
          
          // update nav
          const element = navElements[i]
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

  let count = 0;

  return (
    <div className='content'>
      <header>
        {/* sticky, do gradient stroke w/ non sticky background element? or numbers idk */}
        <div className='headertop'>
          <div>
            <h1>
              <Link to="./">
                Hey! I'm Andrew.
              </Link>
            </h1>
            <h2>CS Undergrad @ Emory</h2>
            <p className='body'>Defeater of ML problem sets and unsanitized data :P</p>
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
          <ResetSkills />
        </div>
        <Socials />
      </header>
      <main>
        <section id='about'>
          <SectionPane name='about' />

          <p className='body'>
            When my mom found out my “self-directed interest” in Computer Science was just a ploy for more video game time, she enrolled me in an introductory Java course to discourage any further deception from me. Little did she know, that Java course's final project began the process of replacing <a href="https://borg286.github.io/sevtech/" target="_blank" rel="noopener noreferrer">questing</a> and <a href="https://www.youtube.com/watch?v=zrAllccwz5I" target="_blank" rel="noopener noreferrer">lineup tutorials</a> with <a href="https://trello.com/" target="_blank" rel="noopener noreferrer">kanban boards</a> and <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">Stack Overflow</a>.
          </p>
          <p className='body'>
            Nowadays, I try live by the motto of <span className='emphasis'>“doing stuff you care about, and doing it well.”</span> I've delved deeper into CS, building the backend of a <a href="https://biblebot.xyz/" target="_blank" rel="noopener noreferrer">Discord bot</a> and learning front-end design and tech for a new <a href="https://www.instagram.com/project_emory_/" target="_blank" rel="noopener noreferrer">project-building community</a> on Emory's campus. In true liberal arts fashion, I've also cleaned cobwebs out of an <a href="https://emory.campuslabs.com/engage/organization/outdoor-emory" target="_blank" rel="noopener noreferrer">outdoor club's</a> old shed :P. With this motto in mind, I aspire towards a career allowing me to further channel my passion for building good products for great people.
          </p>
          <p className='body'>
            While I'm not working on a problem set or programming, you can find me backpacking, hanging out with friends, playing guitar for RUF Emory, or tackling some quests on my 3 year old Sevtech Ages save (I do still play video games :D).
          </p>
        </section>
        
        <div className='startline'></div>

        <section id='experience' className='line'>
          <SectionPane name='experience' />

          <div className='narrowcontent'>
            {
              experience[0].map(entry => {
                return (
                  <ExperiencePane
                    key={count++}
                    pos={entry.pos}
                    group={entry.group}
                    groupurl={entry.groupurl}
                    date={entry.date}
                    desc={entry.desc}
                    skills={entry.skills}
                  />
                )
              })
            }
          </div>
        </section>

        <section id='involvement' className='line'>
          <SectionPane name='involvement' />

          <div className='narrowcontent'>
            {
              experience[1].map(entry => {
                return (
                  <ExperiencePane
                    key={count++}
                    pos={entry.pos}
                    group={entry.group}
                    groupurl={entry.groupurl}
                    date={entry.date}
                    desc={entry.desc}
                    skills={entry.skills}
                  />
                )
              })
            }

            <a href='/resume.pdf' target="_blank" rel="noopener noreferrer">
              <InfoPane text='View full resume' border={true} url='' />
            </a>
          </div>
        </section>

        <section id='projects' className='line'>
          <SectionPane name='projects' />

          <div className='projects'>
            {
              projects.map(entry => {
                return (
                  <ProjectPane
                    key={count++}
                    name={entry.name}
                    url={entry.url}
                    desc={entry.desc}
                    img={entry.img}
                    skills={entry.skills}
                  />
                )
              })
            }

            {/* <InfoPane text='View my other projects' border={false} url='' /> */}
          </div>
        </section>

        <section id='contact' className='line'>
          <SectionPane name='contact' />

          <div className='narrowcontent'>
            <ContactPane />
          </div>
        </section>

        <div className='endline'></div>

        <footer className='small'>
          Made with &lt;3 by yours truly. Designed in <a href="https://www.figma.com/file/JnrF4bZd49wXQkqQt8gn4y/Personal-Website?type=design&node-id=0%3A1&mode=design&t=w5XP0i1XKhbp5cU3-1" target="_blank" rel="noopener noreferrer">Figma</a>, built with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>, and <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>. Inspired by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">Brittany Chiang's</a> and <a href="https://rpiloto.codes/" target="_blank" rel="noopener noreferrer">Rafael Piloto's</a> websites. If you're interested, get a sneak peak of my thought process and read the dev log <a href="https://github.com/andrewtlu/andrewtlu.github.io/tree/main/dev_log" target="_blank" rel="noopener noreferrer">here</a>! 
          </footer>
      </main>
    </div>
  )
}

export default Home