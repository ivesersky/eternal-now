import '../styles/event.scss';
import { HashLink as Link } from 'react-router-hash-link';
interface ITuxedoProps {
  event?: any
}

export const Event = (props: ITuxedoProps) => {
  return <div className='event'>
   <div className="event__inner">
     <div className="event__inner__picture"></div>
     <p className="event__inner__event"></p>
     <p className="event__inner__text">{props.event.name} </p>
     <p className="event__inner__date">{props.event.date}</p>
     <div className="event__inner__btn">
      <p>{props.event.link}</p>
     </div>
   </div>
  </div>
}