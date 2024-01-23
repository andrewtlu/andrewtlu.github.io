import { useState } from 'react';
import './buttons.css'

// TODO: inherit accent color
export function SkillButton(props: {skill: string}) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className='skillbutton body'
      id={selected ? 'selected' : 'unselected'}
      onClick={() => {
        setSelected((selected) => !selected);
    }}>
      {props.skill}
    </button>
  );
}

export function HiButton() {
  return (
    <a href="mailto:andrewlulu2012@gmail.com">
      <button className='hibutton'>
        Say hi!
      </button>
    </a>
  )
}