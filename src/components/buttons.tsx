import './buttons.css'
import '../store/selected'
import { SelectedContext, isSelected, toggleSkill } from '../store/selected';
import { useContext } from 'react';

// TODO: inherit accent color
export function SkillButton(props: {skill: string}) {
  const [selected, setSelected] = useContext(SelectedContext);

  return (
    <button
      className='skillbutton body'
      id={isSelected(selected, props.skill) ? 'selected' : 'unselected'}
      onClick={() => {
        toggleSkill(selected, setSelected, props.skill);
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