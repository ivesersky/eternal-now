import '../styles/event.scss';
import { HashLink as Link } from 'react-router-hash-link';

export const Event = () => {
  return <div className='event'>
   <div className="event__inner">
     <div className="event__inner__picture"></div>
     <p className="event__inner__event"></p>
     <p className="event__inner__text">Rafael Lozano-Hemmer </p>
     <p className="event__inner__date">Thursday Nov 12 2021 6 PM</p>
     <div className="event__inner__btn">
      <p>More Info / Get Tickets</p>
     </div>
   </div>
  </div>
}