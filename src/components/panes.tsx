import { useContext, useState } from 'react';
import './panes.css'
import './svgs.tsx'
import { HiButton, SkillButton } from './buttons.tsx';
import { Chat, DropdownArrow, RedirectArrow, ResumeNoA } from './svgs.tsx';
import { SelectedContext, hasSelected } from '../store/selected.tsx';

// used really janky height solution for animation, if problems with rendering check max-height property of .panebody>.small

interface ExperiencePaneProps {
  pos: string;
  group: string;
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
        onClick={() => setClosed((closed) => !closed)}
      >
        <DropdownArrow />
        <span className='role body'>
          {props.pos}
        </span>
      </div>

      <div className='panebody'>
        <div className='subheader'>
          <span className='small employer'>
            {props.group}
          </span>
          <span className='small'>
            {props.date /*formatDate(props.date)*/}
          </span>
        </div>

        <div className='small'>
          {props.desc}
        </div>

        <div className='skills'>
          {
            props.skills.map(skill => {
              return (
                <SkillButton key={skill} skill={skill} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export function InfoPane(props: InfoPaneProps) {
  const [selected, _] = useContext(SelectedContext);

  return (
    <div
      className={
        'infopane paneheader' +
        (props.border || selected.length == 0 ? ' selected' : ' unselected')
      }
      id={props.border ? 'border' : 'borderless'}
    >
      <div className='content'>
          <ResumeNoA />
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
      <img src={props.img} alt={props.name + ' image'} />
      <div className='projectbody'>
        <div className='projectheader'>
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
        Whether you want to talk about my projects, backpacking gear, or even Minecraft, my inbox is open!
        <HiButton />
      </div>
    </div>
  );
}