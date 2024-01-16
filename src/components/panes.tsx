import './panes.css'
import './svgs.tsx'
import { Arrow } from './svgs.tsx';

interface ExperiencePaneProps {
  pos: string;
  employer: string;
  date: Date;
  desc: string;
  skills: string[];
}

function formatDate(date: Date): string {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return (month[date.getMonth()] + ' ' +  date.getFullYear())
}

export function Experience(props: ExperiencePaneProps) {
  return (
    <div>
      <div>
        {/* pane header */}
        <Arrow /> {/* TODO: animate rotate */}
        {props.pos}
      </div>
      <div>
        {/* pane body */}
        <div>
          {props.employer}
          {formatDate(props.date)}
        </div>
        <div>
          {props.desc}
          {/* TODO: for loop for each skill */}
          {/* TODO: button components */}
        </div>
      </div>
    </div>
  );
}