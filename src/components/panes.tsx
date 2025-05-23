import { useContext, useState } from 'react';
import './panes.css'
import './svgs.tsx'
import { HiButton, SkillButton } from './buttons.tsx';
import { Chat, DropdownArrow, Project, RedirectArrow, ResumeNoA } from './svgs.tsx';
import { SelectedContext, hasSelected } from '../store/selected.tsx';

// used really janky height solution for animation, if problems with rendering check max-height property of .panebody>.small

interface ExperiencePaneProps {
  pos: string;
  group: string;
  groupurl: string;
  date: string // Date;
  desc: string;
  skills: string[];
}

interface InfoPaneProps {
  text: string;
  url: string;
  border: boolean;
}

interface ProjectPaneProps {
  name: string;
  url: string;
  desc: string;
  img: string;
  skills: string[];
}

// function formatDate(date: Date): string {
//   const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//   return (month[date.getMonth()] + ' ' +  date.getFullYear())
// }

export function ExperiencePane(props: ExperiencePaneProps) {
  const [closed, setClosed] = useState(false);
  const selected = useContext(SelectedContext)[0];

  return (
    <div
      className={
        'experiencepane ' + 
        (hasSelected(selected, props.skills) ? 'selected ' : 'unselected ') +
        (closed ? 'closed' : 'opened')
      }
    >
      <div
        className='paneheader'
        onClick={() => {if (hasSelected(selected, props.skills)) setClosed((closed) => !closed)}}
      >
        <DropdownArrow />
        <span className='role body'>
          {props.pos}
        </span>
      </div>

      <div className='panebody'>
        <div className='subheader'>
          <a href={props.groupurl} target="_blank" rel="noopener noreferrer" className='small employer'>
            {props.group}
            <RedirectArrow />
            </a>
          <span className='small'>
            {props.date /*formatDate(props.date)*/}
          </span>
        </div>

        <div className='small'>
          {props.desc}
        </div>


        {
          props.skills ?
          <div className='skills'>
            {
              props.skills.map(skill => {
                return (
                  <SkillButton key={skill} skill={skill} />
                )
              })
            }
          </div> : null
        }
      </div>
    </div>
  );
}

export function InfoPane(props: InfoPaneProps) {
  const [selected, _] = useContext(SelectedContext);

  return (
    <div
      className={
        'infopane' +
        (props.border || selected.length == 0 ? ' selected' : ' unselected')
      }
      id={props.border ? 'border' : 'borderless'}
    >
      <div className='panebody'>
          {props.border ? <ResumeNoA /> : <Project />}
          <h2 className='role'>{props.text}</h2>
      </div>
      <RedirectArrow />
    </div>
  );
}

export function ProjectPane(props: ProjectPaneProps) {
  const [selected, _] = useContext(SelectedContext);

  return (
    <div
      className={
        'projectpane ' + 
        (hasSelected(selected, props.skills) ? 'selected' : 'unselected')
      }
    >
        <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.img} alt={props.name + ' image'} />
        <div className='panebody'>
          <div className='title'>
            <p className='body'>{props.name}</p>
            <RedirectArrow />
          </div>
          <div className='small'>
            {props.desc}
          </div>
          <div className='skills'>
            {props.skills.map(skill => {
              return (
                <SkillButton key={skill} skill={skill} />
              );
            })}
          </div>
        </div>
      </a>
    </div>
  )
}

export function ContactPane() {
  return (
    <div className='contactpane'>
      <div className='paneheader'>
        <Chat />
        <h2 className='role'>Want to chat? Let's talk!</h2>
      </div>
      <div className='panebody body'>
        Whether you want to talk about my projects (or have a cool project idea in mind), backpacking gear, or even Minecraft, my inbox is open!
        <HiButton />
      </div>
    </div>
  );
}

export function SectionPane(props: {name: string}) {
  return (
    <a href={'#' + props.name} className='sectionpane'>
      <p className='body'>
        {props.name}
      </p>
    </a>
  )
}