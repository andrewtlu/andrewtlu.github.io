import { useState } from 'react';
import { Button } from './buttons.tsx';
import './panes.css'
import './svgs.tsx'
import { Arrow } from './svgs.tsx';

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
        <Arrow /> {/* TODO: animate rotate */}
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