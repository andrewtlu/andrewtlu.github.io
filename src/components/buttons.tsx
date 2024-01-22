import { useState } from 'react';
import './buttons.css'

// TODO: inherit accent color
export function Button(props: {skill: string}) {
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