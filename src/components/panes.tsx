import { useState } from 'react';
import { Button } from './buttons.tsx';
import './panes.css'
import './svgs.tsx'
import { DropdownArrow, RedirectArrow, ResumeNoA } from './svgs.tsx';

// used really janky height solution for animation, if problems with rendering check max-height property of .panebody>.small

interface ExperiencePaneProps {
  pos: string;
  employer: string;
  date: string // Date;
  desc: string;
  skills: string[];
}

function formatDate(date: Date): string {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return (month[date.getMonth()] + ' ' +  date.getFullYear())
}

export function ExperiencePane(props: ExperiencePaneProps) {
  const [closed, setClosed] = useState(false);

  return (
    <div className='experiencepane' id={closed ? 'closed' : 'opened'}>
      <div
        className='paneheader'
        onClick={() => setClosed((closed) => !closed)}
      >
        <DropdownArrow /> {/* TODO: animate rotate */}
        <span className='role body'>
          {props.pos}
        </span>
      </div>

      <div className='panebody'>
        <div className='subheader'>
          <span className='small employer'>
            {props.employer}
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
                <Button skill={skill} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export function ResumePane() {
  return (
    <div className='resumepane paneheader'>
      <div className='content'>
          <ResumeNoA />
          <h2 className='role'>View Full Resume</h2>
      </div>
      <RedirectArrow />
    </div>
  );
}

export function ContactPane() {
  return (
    <div className='contactpane'>
      <div className='paneheader'>

      </div>
      <div className='panebody'>

      </div>
    </div>
  );
}